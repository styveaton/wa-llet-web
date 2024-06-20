import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashPickupComponent } from './cash-pickup.component';
import { CashPickupRoutingModule } from './cash-pickup-routing.module';



@NgModule({
  declarations: [
    CashPickupComponent
  ],
  imports: [
    CommonModule,
    CashPickupRoutingModule
  ]
})
export class CashPickupModule { }
