import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersAndAffiliatesRoutingModule } from './partners-and-affiliates-routing.module';
import { PartnersAndAffiliatesComponent } from './partners-and-affiliates.component';



@NgModule({
  declarations: [
    PartnersAndAffiliatesComponent
  ],
  imports: [
    CommonModule,
    PartnersAndAffiliatesRoutingModule
  ]
})
export class PartnersAndAffiliatesModule { }
