import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';  
import { TransactionBoxComponent } from '../skeleton/transaction-box/transaction-box.component';
import { HtmlEnglishComponent } from './html-english/html-english.component';


@NgModule({
  declarations: [
    HomeComponent, 
    TransactionBoxComponent, HtmlEnglishComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule
  ]
})
export class HomeModule { }
