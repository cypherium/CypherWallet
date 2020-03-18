import { Injectable } from '@angular/core';
import * as Web3 from 'web3-cypher';
import * as sha from 'sha.js';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { Buffer } from 'safe-buffer';
import * as EthereumTx from 'ethereumjs-tx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { GlobalService } from '../global/global.service';
// import * as Secp from 'secp256k1';
import { environment } from '../../../environments/environment';

declare var Buffer;
@Injectable({
    providedIn: 'root'
})
export class Web3Service {
    public web3;
    private pledgeContract;

    constructor(
        private http: HttpClient,
        private global: GlobalService
    ) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(environment.cypherium.provider));
        this.http.get('assets/json/pledge.abi.json').subscribe((abi: any) => {
            console.log("abi文件加载成功" + JSON.stringify(abi));
            // this.pledgeContract = this.web3.cph.contract(abi).at(environment.cypherium.pledgeContractAddr);
            this.pledgeContract = new this.web3.cph.contract(abi, environment.cypherium.pledgeContractAddr);
            return this.pledgeContract;
        });
    }

    async isCphAddr(addr) {
        if (!addr) {
            return -1;
        }
        addr = addr.toLowerCase();
        if (!addr.startsWith('cph')) {
            return -2;
        }
        let result = await this.web3.isAddress('0x' + addr.slice(3));
        return result ? 0 : -2;
    }

    async getBlockHeight() {
        let height = await this.web3.cph.txBlockNumber;
        return height;
    }

    async getKeyBlockHeight() {
        let height = await this.web3.cph.keyBlockNumber;
        return height;
    }

    initContract(name, abi, addr) {
        if (this[name]) {
            return this[name];
        } else {
            this[name] = new this.web3.cph.contract(abi, addr);
            console.log("合约初始化成功:", name, addr);
            return this[name];
        }
    }

    // async getCphBalance(userAddr, pending = false) {
    //     console.log('getCphBalance');
    //     let value = await this.web3.cph.getBalance(userAddr, pending ? 'pending' : 'latest');
    //     console.log("调用参数:-----------------------------------", userAddr, value);

    //     console.log(`钱包${userAddr}的余额是${value}`);
    //     value = this.web3.fromWei(value, 'cpher');
    //     return value;
    // }

    getCphBalance(userAddr, callback, pending = false) {
        console.log('getCphBalance');
        this.web3.cph.getBalance(userAddr, pending ? 'pending' : 'latest', (e,v) => {
            if (!e) {
                console.log("调用参数:-----------------------------------", userAddr, v);
                console.log(`钱包${userAddr}的余额是${v}`);
                let value = this.web3.fromWei(v, 'cpher');
                callback(value);
            } else {
                //读取余额本地缓存
                if (this.global.currentWalletIndex != undefined) {
                    callback(this.global.gWalletList[this.global.currentWalletIndex].amount);
                } else {
                    callback(0);
                }
                // let error = await this.helper.getTranslate('MNEMONIC_WRONG');
                // this.helper.toast(error);

            }
        });
    }

    getMortage(from) {
        // let value = await this.pledgeContract.methods.mortgageOf(from).call({ from: from });
        // value = this.web3.fromWei(value + "", 'cpher');
        // return value;
        return new Promise((resolve, reject) => {
            this.pledgeContract.methods.mortgageOf(from).call({ from: from }, (err, result) => {
                if (err) {
                    resolve(0);
                } else {
                    console.log("抵押", result);
                    let value = this.web3.fromWei(result + "", 'cpher');
                    resolve(value);
                }
            });
        })
    }

    async pledge(type, from, amount, privateKey, callback) {
        amount = this.web3.toWei(amount + "", 'cpher');
        let gasPrice = await this.web3.cph.getGasPrice();
        if (!gasPrice || gasPrice == '0') {
            gasPrice = this.web3.toWei(20, 'gwei');
        }
        let params = type == 'mortgage' ? [from, amount] : [amount];
        let tx = await this.generateCphTx(from, environment.cypherium.pledgeContractAddr, '0x0', gasPrice, privateKey, 'pledgeContract', type, params);
        const serializedTx = tx.serialize();
        this.web3.cph.sendSignedTransaction('0x' + serializedTx.toString('hex'), callback); //调起合约
        // this.web3.cph.sendSignedTransaction(tx.rawTransaction, callback); //调起合约
    }

    async transferCph(from, to, value, gasPrice, privateKey, callback) {
        console.log(`发起转账----from:${from},to:${to},value:${value}`);
        value = this.web3.toWei(value, 'cpher');
        gasPrice = this.web3.toWei(gasPrice + "", 'gwei');
        let tx = await this.generateCphTx(from, to, value, gasPrice, privateKey);
        console.log("交易签名：", tx)
        const serializedTx = tx.serialize();
        this.web3.cph.sendRawTransaction('0x' + serializedTx.toString('hex'), callback);
        // this.web3.cph.sendSignedTransaction('0x' + serializedTx.toString('hex'), callback); //调起合约
        // this.web3.cph.sendSignedTransaction(tx.rawTransaction, callback); //调起合约
    }

    async generateCphTx(
        from,
        to,
        value,
        gasPrice,
        privateKey, //账户私钥，用于签名
        contractName = "",
        funcname = "",
        params = null
    ) {
        let data = "";
        if (params) {
            var thisobj = this[contractName].methods[funcname]; //从目标合约对象中提取函数
            data = thisobj.apply(thisobj, params).encodeABI(); //将参数封装成合约参数形式
        }

        // var nonce = await this.web3.cph.getTransactionCount('0x' + from, 'pending'); //获取用户钱包地址的nonce
        var nonce = await this.web3.cph.getTransactionCount('0x' + from); //获取用户钱包地址的nonce

        console.log("Nonce为" + nonce);
        // let gasLimit = await this.web3.cph.estimateGas({
        //     "from": '0x'+from,
        //     "nonce": nonce,
        //     "to": to,
        //     "data": data
        // })

        // let chainId = await this.web3.cph.net.getId();
        // console.log("chainId:", chainId);
        const txParams = {
            version: '0x122',
            senderKey: '0x' + privateKey.substring(64, 128),
            from: from,
            nonce: nonce,
            // gas: this.convert10to16(gasLimit),
            gasLimit: '0x5208',
            gasPrice: this.convert10to16(gasPrice),
            to: to,
            data: data,
            value: this.convert10to16(value)
            // chainId: chainId
        };

        console.log("转账参数：" + JSON.stringify(txParams));
        // return this.web3.cph.accounts.signTransaction(txParams, privateKey);

        const tx = new EthereumTx.Transaction(txParams, {
            // chain: "cphnet"
        });
        // let privateKeyBuffer = Buffer.from(privateKey, 'hex');
        // tx.sign(privateKeyBuffer);

        var p = new Uint8Array(this._hexStringToBytes(privateKey));
        var k = new Uint8Array(this._hexStringToBytes(privateKey.substring(64, 128)));
        tx.signWith25519(p, k);
        return tx;
    }

    async getTxDetail(tx) {
        let result = await this.web3.cph.getTransaction(tx);
        result.value = this.web3.fromWei(result.value, 'cpher');
        result.gasPrice = this.web3.fromWei(result.gasPrice, 'cpher');
        return result
    }

    computeSha256Hash(str) {
        const sha256 = sha('sha256');
        const msgHash = sha256.update(str, 'utf8').digest('hex');
        return msgHash;
    }

    strToBase64(str) {
        let strBase64 = new Buffer(str, "hex").toString('base64');
        return strBase64;
    }

    base64ToStr(base64) {
        let str = new Buffer(base64, "base64").toString("hex");
        return str;
    }

    strToBuffer(str, type) {
        console.log(str + '即将转成buffer对象');
        if (type === 'hex') {
            return Buffer.from(str, 'hex');
        } else {
            return Buffer.from(str);
        }
    }

    floatMultiple(f1, f2) {
        let m1 = new this.web3.BigNumber(f1),
            m2 = new this.web3.BigNumber(f2);
        return m1.mul(m2);
    }

    bufferToStr(buf, type) {
        if (type) {
            return buf.toString(type);
        } else {
            return buf.toString();
        }
    }

    convert10to16(n) {
        if (typeof n !== 'string') {
            n = n.toString();
        }
        if (n.startsWith('0x')) {
            return n;
        }
        return this.web3.toHex(n);
    }

    _hexStringToBytes(hexStr) {
        let result = [];
        while (hexStr.length >= 2) {
            result.push(parseInt(hexStr.substring(0, 2), 16));
            hexStr = hexStr.substring(2, hexStr.length);
        }
        return result;
    }

    _bytesToHexString(byteArray) {
        return Array.prototype.map.call(byteArray, function (byte) {
            return ('0' + (byte & 0xFF).toString(16)).slice(-2);
        }).join('');
    }

}




