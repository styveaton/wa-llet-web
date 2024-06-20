import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { HtmlEnglishComponent } from './html-english/html-english.component';



@NgModule({
  declarations: [
    MyAccountComponent,
    HtmlEnglishComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule
  ]
})
export class MyAccountModule { }
