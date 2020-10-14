import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../providers/helper/helper.service';
import { Platform, NavController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { GlobalService } from '../../providers/global/global.service';
import { Storage } from '@ionic/storage';
import { NativeService } from '../../providers/native/native.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
    name = "";
    version = "";
    packageName = "";
    public keystore = '';
    public privateKey = '';
    public mnemonic = '';
    public address = '';
    constructor(
        private router: Router,
        private global: GlobalService,
        private storage: Storage,
        private helper: HelperService,
        private navCtrl: NavController,
        private platform: Platform,
        private native: NativeService,
        public activeRouter: ActivatedRoute,
    ) {
        if (this.router.getCurrentNavigation().extras.state) {
            this.address = this.router.getCurrentNavigation().extras.state.wallet;
            this.privateKey = this.router.getCurrentNavigation().extras.state.privateKey;
            console.log("about wallet", this.address);
            console.log("about privateKey", this.privateKey);
        }
    }

    ngOnInit() {
        this.activeRouter.queryParams.subscribe((data) => {
            console.log("activeRouter.returnUrl", data.returnUrl);
            console.log('%o', data);

        })
        if (this.platform.is('cordova')) {
            this.native.getAppVersionInfo().subscribe(res => {
                console.log("Get version：" + JSON.stringify(res));
                this.version = res.versionNumber;
                this.name = res.name + 'Wallet';
                this.packageName = res.packageName;
            })
        } else {
            this.version = '1.0.0';
            this.packageName = "com.cph.www";
            this.name = "light Wallet";
        }
        this.privateKey = this.global.privateKey;
        this.address =this.global.gWalletList[this.global.currentWalletIndex || 0] || {};
    }

    copyPrivateKey() {
        this.native.copy(this.helper.privateKey);
    }

    copytMnemonic() {
        this.native.copy(this.helper.mnemonic);
    }

    copyKeystore() {
        this.native.copy(this.helper.keystore);
    }

    copyAddress() {
        this.native.copy(this.helper.address);
    }

    getPrivateKey() {
        return this.helper.privateKey;
    }

    getKeyStore() {
        return this.helper.keystore;
    }

    getMnemonic() {
        return this.helper.mnemonic;
    }
}
