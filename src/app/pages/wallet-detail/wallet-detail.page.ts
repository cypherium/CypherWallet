import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../providers/global/global.service';
import { HttpService } from '../../providers/http/http.service';
import { Web3Service } from '../../providers/web3/web3.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HelperService } from '../../providers/helper/helper.service';

@Component({
    selector: 'app-wallet-detail',
    templateUrl: './wallet-detail.page.html',
    styleUrls: ['./wallet-detail.page.scss'],
})
export class WalletDetailPage implements OnInit {
    allTransactionList = [];
    pageno = 1;
    pageSize = 20;
    type = 0;
    wallet: any = {};
    amount: any = "";
    amountInOther: any = "";
    amountInOtherDisplay: any = "";
    blockHeight: any = "";
    more = true;
    loading = false;
    interval = null;

    constructor(
        private global: GlobalService,
        private http: HttpService,
        private web3: Web3Service,
        private helper: HelperService,
        private router: Router
    ) { 
        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
        console.log("钱包：" + JSON.stringify(this.wallet));
        this.amount = this.wallet.amount || 0;
        this.getWalletInfo(this.wallet.addr);
        this.interval = setInterval(() => {
            this.getWalletInfo(this.wallet.addr);
        }, 10000);
    }

    ngOnInit() {

    }

    getWalletInfo(addr) {
        this.web3.getCphBalance(addr, (v) => {
            if (this.amount.toString() !== v.toString() && v !== undefined) {
                this.amount = v;
                this.global.gWalletList[this.global.currentWalletIndex].amount = this.amount;
                this.helper.saveWallet();
            }
        });
    }

    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    ionViewWillLeave() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    async ionViewDidEnter() {
        // this.blockHeight = await this.web3.getBlockHeight();
        this.getTransactionList();
        //获取汇率信息
        this.http.get(this.global.api['getRateInfo']).subscribe(res => {
            console.log("汇率：", res.rates);
            let unit = this.global.settings.valueUnit || "USD";

            let value = res.rates.find(item => item.currency == unit);
            if (!value) {
                value = res.rates[0];
            }
            this.global.selectedRate = value;
            //计算当前金额的估算
            this.amountInOther = this.amount * value.rate;
            let amountInOtherInterger = Math.floor(this.amountInOther);
            let mod = Math.floor(Math.pow(10, value.significand));
            let amountInOtherFraction: any = Math.floor(this.amountInOther * mod) % mod;
            amountInOtherFraction = amountInOtherFraction + "";
            while (amountInOtherFraction.length < value.significand) {
                amountInOtherFraction = amountInOtherFraction + '0';
            }
            this.amountInOtherDisplay = amountInOtherInterger + '.' + amountInOtherFraction;
        })
    }

    goTransferPage() {
        this.router.navigate(['cph-send']);
    }

    goReceivePage() {
        this.router.navigate(['cph-receive']);
    }

    async getTransactionList() {
        let pledge = await this.helper.getTranslate('PLEDGE_CONTRACT_MINING'),
            drawback = await this.helper.getTranslate('DRAWBACK_CONTRACT_MINING');
        let finished = await this.helper.getTranslate('FINISHED');

        this.loading = true;
        //获取交易列表
        let url = this.global.api['getTransList'];
        return this.http.post(url, {
            addr: '0x' + this.wallet.addr.replace('0x', ''),
            txType: this.type,
            pageIndex: this.pageno,
            pageSize: this.pageSize
        }).subscribe(res => {
            this.loading = false;
            if (res.err_no == 0) {
                this.blockHeight = this.web3.getBlockHeight();
                if (res.transactions) {
                    res.transactions.forEach(item => {
                        if (item.tx_type == 1 || item.tx_type == 2) {
                            item.displayValue = this.web3.web3.fromWei(item.value, 'cpher');
                        } else {
                            item.displayValue = this.web3.web3.fromWei(item.tx_type_ext, 'cpher');
                        }
                        let height = this.blockHeight - item.block_number;
                        if (item.block_number == -2) {
                            item.blockHeight = "pending";
                        } else if (height < 1) {
                            item.blockHeight = height + "/1";
                        } else {
                            item.blockHeight = finished;
                        }
                        if (item.tx_type == 3) {
                            item.to = pledge;
                        } else if (item.tx_type == 4) {
                            item.to = drawback;
                        }
                    })
                    if (this.pageno == 1) {
                        this.allTransactionList = res.transactions || [];
                    } else {
                        this.allTransactionList = this.allTransactionList.concat(res.transactions || []);
                    }
                    // this.more = (this.allTransactionList.length < res.count);
                    if (Object.keys(res.transactions).length == this.pageSize) {
                        this.more = true;
                    }else {
                        this.more = false;  
                    }
                    console.log(this.allTransactionList.length, res.count);
                } else {
                    if (this.pageno > 1) {
                        this.pageno--;
                    }else {
                        this.allTransactionList = [];
                    }
                    this.more = false;

                }
            }
        })
    }

    goResultPage(transaction) {
        let navigationExtras = {
            state: {
                tx: transaction.tx_hash,
                status: 0, //0-成功，1:打包中，2:失败
                time: transaction.timestamp / 1000000
            }
        };
        if (transaction.blockHeight === "pending") {
            navigationExtras.state.status = 1;
        }
        //前往交易结果页
        this.router.navigate(['transaction-result'], navigationExtras);
    }

    toggleType(type) {
        // this.helper.getTranslate('COMING_SOON').then(msg => {
        //     this.helper.toast(msg);
        // });

        if (this.type != type) {
            this.type = type;
            this.pageno = 1;
            this.getTransactionList();
        }
    }

    async getMore(infiniteScroll) {
        if (!this.more) {
            infiniteScroll.target.complete();
            return false;
        }
        this.pageno++;
        // this.loading = true;
        await this.getTransactionList();
        // this.loading = false;
        infiniteScroll.target.complete();

    }

}
