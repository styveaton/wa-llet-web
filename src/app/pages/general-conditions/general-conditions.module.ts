import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralConditionsComponent } from './general-conditions.component';
import { GeneralConditionsRoutingModule } from './general-conditions-routing.module';
import { HtmlEnglishComponent } from './html-english/html-english.component';



@NgModule({
  declarations: [
    GeneralConditionsComponent,
    HtmlEnglishComponent
  ],
  imports: [
    CommonModule,
    GeneralConditionsRoutingModule
  ]
})
export class GeneralConditionsModule { }
