import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAcceptanceComponent } from './customer-acceptance.component';
import { CustomerAcceptanceRoutingModule } from './customer-acceptance-routing.module';



@NgModule({
  declarations: [
    CustomerAcceptanceComponent
  ],
  imports: [
    CommonModule,
    CustomerAcceptanceRoutingModule
  ]
})
export class CustomerAcceptanceModule { }
