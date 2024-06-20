import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';
import * as translatCustomerAcceptance from '../../langues/customer-acceptance';
@Component({
  selector: 'app-customer-acceptance',
  templateUrl: './customer-acceptance.component.html',
  styleUrls: ['./customer-acceptance.component.scss']
})
export class CustomerAcceptanceComponent extends Base{
  translations:any = {};
  constructor(router: Router, translate: TranslateService){
    super(router, translate);
    this.translations = translatCustomerAcceptance;
  }
  applyText(text:string){
    return  this.translations[this.activeLangue]?.PROPS[text];
   }
}
