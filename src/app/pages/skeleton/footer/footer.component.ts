import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';
import * as translatFooter from '../../../langues/footer';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends Base{
  translations:any = {}; 
  constructor(router: Router, translate: TranslateService){
    super(router, translate);
    this.translations = translatFooter;
  }

  openViewMobileApp(){
    this.router.navigate(['/mobile-app']);
  }
  openViewFaq(){
    this.router.navigate(['/how-it-works']);//faq
  }
  openViewAbout(){
    this.router.navigate(['/about']);
  }
  openViewCorporate(){
    this.router.navigate(['/corporate']);
  }
  openViewReviews(){
    this.router.navigate(['/avis']);
  }
  openViewPartnersAndAffiliates(){
    this.router.navigate(['/partners-and-affiliates']);
  }
  openViewSendMoney(code: string){
    this.router.navigate(['/mobile-app']);
  }
  openViewPolicy(){
    this.router.navigate(['/privacy-policy']);
  }
  openViewCookies(){
    this.router.navigate(['/cookies-policy']);
  }
  openViewAcceptance(){
    this.router.navigate(['/customer-acceptance']);
  }
  openViewGeneralConditions(){
    this.router.navigate(['/general-conditions']);
  }
  openViewCashPickup(){
    this.router.navigate(['/cash-pickup']);
  }

  applyText(text:string){
    return  this.translations[this.activeLangue]?.PROPS[text];
   }
}
