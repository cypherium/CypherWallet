import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../providers/global/global.service';
import { HelperService } from '../../providers/helper/helper.service';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Web3Service } from '../../providers/web3/web3.service';
import { NativeService } from '../../providers/native/native.service';
import { Platform, NavController, AlertController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ModalController } from '@ionic/angular';
import { PincodeModalPage } from '../pincode-modal/pincode-modal.page';

@Component({
    selector: 'app-cph-send',
    templateUrl: './cph-send.page.html',
    styleUrls: ['./cph-send.page.scss'],
})
export class CphSendPage implements OnInit {
    range = 18;     //let price = await this.web3.cph.gasPrice(); price/1e9;
    wallet: any = {};
    amount = 0;
    receiveAddress = "";
    payAmount: any = "";
    min = 1;
    max = 100;
    amountError = "";
    addressError = "";
    ifShowPasswordPrompt = false;
    ifShowAlert = false;
    alertTitle = "";
    alertDesc = "";
    interval = null;

    constructor(
        private router: Router,
        // private clipboard: Clipboard,
        private helper: HelperService,
        private global: GlobalService,
        private storage: Storage,
        private web3: Web3Service,
        public nav: NavController,
        private platform: Platform,
        private keyboard: Keyboard,
        private native: NativeService,
        public modalController: ModalController,
        public alertController: AlertController,
    ) { 
        let state = this.router.getCurrentNavigation().extras.state;
        if (state) {
            this.receiveAddress = state.address;
        }
        this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
        if (!this.wallet.payment) {
            this.presentAlertConfirm();
        }
        this.amount = this.wallet.amount || 0;
        this.updateWalletInfo();
        this.interval = setInterval(() => {
            this.updateWalletInfo();
        }, 10000);
    }

    async presentAlertConfirm() {
        let header = await this.helper.getTranslate('PAYMENT_PASSWORD');
        let message = await this.helper.getTranslate('PAYMENT_PASSWORD_M');
        let comfirm = await this.helper.getTranslate('CONFIRM');
        let cancel = await this.helper.getTranslate('CANCEL');

        const alert = await this.alertController.create({
            header: header,
            message: message,
            buttons: [
                {
                    text: cancel,
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        this.nav.pop();
                    }
                },
                {
                    text: comfirm,
                    handler: () => {
                        this.router.navigate(['/setting']);
                    }
                }
            ]
        });

        await alert.present();
    }

    // back() {
    //     this.nav.navigateBack('/wallet');
    // }

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

    async updateWalletInfo() {
        this.web3.getCphBalance(this.wallet.addr, (v) => {
            if (this.amount.toString() !== v.toString() && v !== undefined) {
                this.amount = v;
                this.global.gWalletList[this.global.currentWalletIndex].amount = this.amount;
                this.helper.saveWallet();
            }
        });
    }

    async ngOnInit() {
        // console.log(this.global.gWalletList, this.global.currentWalletIndex);
        //获取余额
        // let state = this.router.getCurrentNavigation().extras.state;
        // console.log("state" + state)
        // if (state) {
        //     // let obj = state.extras.state;
        //     this.receiveAddress = state.address;
        // }
    }

    scan() {
        this.native.scan().then(async (res: any) => {
            console.log("SCAN RESULT：", res);
            this.helper.handleText(res.text, async (url, method) => {
                if (method == 'transfer') {
                    let result = await this.web3.isCphAddr(url);
                    if (result == 0) {
                        this.receiveAddress = url;
                    } else {
                        let message = await this.helper.getTranslate('UNKNOWN_RESULT');
                        this.helper.toast(message);
                    }
                }

            })
        }, res => {
            // if (res == 1) {
            //     //临时拒绝

            // } else if (res == 0) {
            //     //永久拒绝
            //     this.ifShowAlert = true;
            //     this.alertTitle = "权限拒绝";
            //     this.alertDesc = "您已拒绝摄像头权限，请前往应用管理打开";
            // } else {
            //     this.helper.toast("扫码失败");
            // }
        })
    }

    cancelPrompt() {
        this.ifShowPasswordPrompt = false;
    }

    async presentModal() {
        let title = await this.helper.getTranslate('PAYMENT_PASSWORD');
        const modal = await this.modalController.create({
            component: PincodeModalPage,
            cssClass: "pincode-modal",
            componentProps: {
                'title': title,
            }
        });
        await modal.present();
        modal.onDidDismiss().then((s) => {
            if (typeof(s.data) !== 'undefined' && s.data.dismissed !== false) {
                //获取私钥
                setTimeout(async () => {
                    let ret = this.helper.decryptPrivateKey(this.wallet.payment, s.data.dismissed);
                    if (ret.flag) {
                        this.transfer(ret.privateKey);
                    } else {
                        //密码错误
                        let error = await this.helper.getTranslate('PAYMENT_PASSWORD_ERROR');
                        this.helper.toast(error);
                    }
                }, 50);
            }
        });
    }

    confirmPrompt(privateKey) {
        console.log("Private key...", privateKey);
        this.ifShowPasswordPrompt = false;
        this.transfer(privateKey);
    }

    cancelAlert() {
        this.ifShowAlert = false;
    }

    confirmAlert() {
        this.ifShowAlert = false;
        this.native.openSettings('application');
    }

    async checkAmount() {
        this.amountError = "";
        let amount = +this.payAmount;
        if (amount <= 0) {
            let message = await this.helper.getTranslate('AMOUNT_ILLEGAL');
            this.amountError = message;
            return;
        }
        if (amount <= 0.0001) {
            let message = await this.helper.getTranslate('AMOUNT_SMALL');
            this.amountError = message;
            return;
        }
        console.log(`${amount}, ${this.range}, ${this.amount}`);
        if (amount + this.range * 21000 / 1000000000 > this.amount) {
            let message = await this.helper.getTranslate('BALANCE_INFFICIENT');
            this.amountError = message;
            return;
        }
    }

    hideKeyboard(e) {
        if (e && (e.key === "Enter" || e.key === "Return")) {
            this.keyboard.hide();
        }
    }

    async checkAddr() {
        this.addressError = "";

        let result = await this.web3.isCphAddr(this.receiveAddress.toLowerCase());
        if (result == -1) {
            let message = await this.helper.getTranslate('ADDRESS_EMPTY');
            this.addressError = message;
        } else if (result == -2) {
            let message = await this.helper.getTranslate('ADDRESS_ERROR');
            this.addressError = message;
        }
    }

    changeRange(e) {
    }

    async transferConfirm() {
        await this.checkAmount();
        if (this.amountError) {
            return;
        }

        await this.checkAddr();
        if (this.addressError) {
            return;
        }
        //引导用户输入密码
        // this.ifShowPasswordPrompt = true;
        //引导用户输入支付密码
        this.presentModal();
    }

    async transfer(privatekey) {
        let address = this.receiveAddress.toLowerCase().replace('cph', '0x');
        this.web3.transferCph(this.wallet.addr, address, this.payAmount, this.range, privatekey, async (err, tx) => {
            console.log("Transaction callback.......", err, tx);
            if (err === null) {
                // resolve(tx);
                // this.helper.toast("交易成功");
                let navigationExtras = {
                    state: {
                        tx: tx,
                        status: 1 //0-成功，1:打包中，2:失败
                    }
                };
                //前往交易结果页
                this.router.navigate(['transaction-result'], navigationExtras);
            } else {
                let message = await this.helper.getTranslate('TRANSACTION_FAILED');
                if (err.message.toLowerCase().indexOf('insufficient funds for gas') > -1) {
                    message = await this.helper.getTranslate('BALANCE_INFFICIENT');
                } else if (err.message.toLowerCase().indexOf('replacement transaction underpriced') > -1) {
                    message = await this.helper.getTranslate('NONCE_ERROR');
                } else {
                    message = message + ': ' + err.message;
                }
                this.helper.toast(message)
            }
        })
    }

}
