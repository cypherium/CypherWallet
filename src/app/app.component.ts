import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { GlobalService } from './providers/global/global.service';
// import { Web3Service } from './providers/web3/web3.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { TranslateService } from "@ngx-translate/core";
import { environment } from '../environments/environment';
import { HelperService } from './providers/helper/helper.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Badge } from '@ionic-native/badge/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private global: GlobalService,
        private navCtrl: NavController,
        // private web3: Web3Service,
        private storage: Storage,
        private keyboard: Keyboard,
        private translate: TranslateService,
        private http: HttpClient,
        private helper: HelperService,
        public badge: Badge
    ) {
        this.http.get(environment.appServerUrl + this.global.api['getProvider']).subscribe((res: any) => {
            this.global.provider = 'http://' + res.providers[0].ip;
        }, err => {
                this.helper.toast('The network is abnormal, please visit later.');
        });
        this.initializeApp();
        this.badge.set(11);
    }

    initializeApp() {
        let n:number;
        this.platform.ready().then(() => {
            // this.statusBar.styleDefault();
            this.splashScreen.hide();

            // //Remove this method to stop OneSignal Debugging 
            // window["plugins"].OneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });

            // var notificationOpenedCallback = function (jsonData) {
            //     console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            // };

            // // Set your iOS Settings
            // var iosSettings = {};
            // iosSettings["kOSSettingsKeyAutoPrompt"] = false;
            // iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

            // window["plugins"].OneSignal
            //     .startInit("181c8c4b-27f8-4445-97c0-1e367c4a88ca")
            //     .handleNotificationOpened(notificationOpenedCallback)
            //     .iOSSettings(iosSettings)
            //     .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
            //     .endInit();

            // // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
            // window["plugins"].OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
            //     console.log("User accepted notifications: " + accepted);
            //     n = 1;
            // });

            //     this.badge.set(12);
    
            this.keyboard.onKeyboardWillShow().subscribe(() => {
                //keyboard显示
                document.body.classList.add('keyboard-is-open');
            })

            this.keyboard.onKeyboardWillHide().subscribe(() => {
                //keyboard显示
                document.body.classList.remove('keyboard-is-open');
            })

            //获取本地存储的钱包，如果没有则前往创建钱包页
            this.storage.get("localwallet").then(res => {
                if (res) {
                    try {
                        this.global.gWalletList = JSON.parse(res);
                        if (this.global.gWalletList.length == 0) {
                            this.navCtrl.navigateRoot('/wallet-create');
                        } else {
                            this.storage.get("localwalletindex").then(res => {
                                console.log("获取钱包序号：", this.global.gWalletList);
                                this.global.currentWalletIndex = +res || 0;
                                this.navCtrl.navigateRoot('wallet');
                                // this.global.currentWallet = this.global.gWalletList[this.global.currentWalletIndex];
                            })
                        }
                    } catch (e) {
                        this.global.gWalletList = [];
                        this.navCtrl.navigateRoot('/wallet-create');
                    }
                } else {
                    this.navCtrl.navigateRoot('/wallet-create');
                }
            })

            this.storage.get("localsetting").then(res => {
                if (res) {
                    try {
                        let setting = JSON.parse(res);
                        this.global.settings = setting;
                    } catch (e) {
                        console.log("获取配置出错...");
                    }
                }
                let lang = this.global.settings.language;
                if (lang !== 'cn' && lang !== 'en') {
                    lang = 'en';
                }
                this.translate.setDefaultLang(lang);
                this.translate.use(lang);
                console.log("Setting language as:" + lang);
            })


        });
    }
}
