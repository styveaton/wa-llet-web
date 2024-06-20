import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMoneyComponent } from './send-money.component';
import { SendMoneyRoutingModule } from './send-money-routing.module';



@NgModule({
  declarations: [
    SendMoneyComponent
  ],
  imports: [
    CommonModule,
    SendMoneyRoutingModule
  ]
})
export class SendMoneyModule { }
