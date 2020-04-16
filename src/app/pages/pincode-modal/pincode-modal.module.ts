import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PincodeModalPage } from './pincode-modal.page';
import { ComponentsModule } from '../../components/components.module';
// import { KeypadComponent } from '../../components/keypad/keypad.component';
const routes: Routes = [
  {
    path: '',
    component: PincodeModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    // KeypadComponent,
    RouterModule.forChild(routes)
  ],
  declarations: [PincodeModalPage]
})
export class PincodeModalPageModule {}
