import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../providers/helper/helper.service';
import { GlobalService } from '../../providers/global/global.service';
import { Platform, NavController } from '@ionic/angular';
@Component({
  selector: 'app-payment-password',
  templateUrl: './payment-password.page.html',
  styleUrls: ['./payment-password.page.scss'],
})
export class PaymentPasswordPage implements OnInit {
  password = "";
  password1 = "";
  password2 = "";
  isChange = false;
  ifEyeOpen = false;
  ifEyeOpen1 = false;
  ifEyeOpen2 = false;

  passwordError = "";
  passwordError1 = "";
  passwordError2 = "";

  ifShowLoading = false;

  wallet: any = {};

  constructor(
    private helper: HelperService,
    private navCtrl: NavController,
    private global: GlobalService,
  ) { }

  ngOnInit() {
    this.wallet = this.global.gWalletList[this.global.currentWalletIndex];
  }

  toggleEyeOpen() {
    this.ifEyeOpen = !this.ifEyeOpen;
  }

  toggleEyeOpen1() {
    this.ifEyeOpen1 = !this.ifEyeOpen1;
  }

  toggleEyeOpen2() {
    this.ifEyeOpen2 = !this.ifEyeOpen2;
  }

  async checkPassword() {
    this.passwordError = "";
    if (!this.password) {
      let error = await this.helper.getTranslate('ORIGINAL_PASSWORD_EMPTY');
      this.passwordError = error;
    }
  }

  async checkPassword1() {
    this.passwordError1 = "";
    if (!this.password1) {
      let error = await this.helper.getTranslate('NEW_PASSWORD_EMPTY');
      this.passwordError1 = error;
    } else if (!/^\d{6}$/.test(this.password1)) {
      //密码格式错误
      let error = await this.helper.getTranslate('PAYMENT_PASSWORD_RULE');
      this.passwordError1 = error;
    }
  }

  async checkPassword2() {
    this.passwordError2 = "";
    if (!this.password2) {
      let error = await this.helper.getTranslate('NEW_PASSWORD_EMPTY');
      this.passwordError2 = error;
    } else if (this.password2 != this.password1) {
      let error = await this.helper.getTranslate('PASSEORD_DIFFERENT');
      this.passwordError2 = error;
    }
  }

  async changePassword() {
    if (this.isChange) {
      await this.checkPassword();
      if (this.passwordError) {
        return;
      }
    }

    await this.checkPassword1();
    if (this.passwordError1) {
      return;
    }

    await this.checkPassword2();
    if (this.passwordError2) {
      return;
    }

    //开始修改密码
    this.ifShowLoading = true;

    setTimeout(async () => {

        this.ifShowLoading = false;
      this.wallet.payment = this.password1;
      this.helper.saveWallet();
        setTimeout(async () => {
          let error = await this.helper.getTranslate('CHANGE_PASSWORD_SUCCEED');
          this.helper.toast(error);
        }, 50);
        setTimeout(() => {
          this.navCtrl.pop();
        }, 1000)
    }, 50);
  }

}
