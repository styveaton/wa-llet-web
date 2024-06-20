import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInformationComponent } from './my-information.component';
import { MyInformationRoutingModule } from './my-information-routing.modules';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    MyInformationComponent
  ],
  imports: [
    CommonModule,
    MyInformationRoutingModule,
    TranslateModule
  ]
})
export class MyInformationModule { }
