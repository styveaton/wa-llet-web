import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorComponent } from './sponsor.component';
import { SponsorRoutingModule } from './sponsor-rounting.module';



@NgModule({
  declarations: [
    SponsorComponent
  ],
  imports: [
    CommonModule,
    SponsorRoutingModule
  ]
})
export class SponsorModule { }
