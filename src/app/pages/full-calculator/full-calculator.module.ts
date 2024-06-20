import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FullCalculatorComponent } from './full-calculator.component';
import { FullCalculatorRoutingModule } from './full-calculator-routing.module';
import { HtmlFrenchComponent } from './html-french/html-french.component';
import { HtmlEnglishComponent } from './html-english/html-english.component'; 



@NgModule({ 
  declarations: [
    FullCalculatorComponent,
    HtmlFrenchComponent,
    HtmlEnglishComponent 
  ],
  imports: [
    CommonModule,
    FullCalculatorRoutingModule,
    TranslateModule
  ]
})
export class FullCalculatorModule { }
