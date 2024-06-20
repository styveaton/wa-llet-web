import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';
import * as translatCookiesPolicy from '../../langues/cookies-policy';
@Component({
  selector: 'app-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.scss']
})
export class CookiesPolicyComponent extends Base{

  translations:any = {};
  constructor(router: Router,  translate: TranslateService){
    super(router,translate);
    this.translations = translatCookiesPolicy;
  }

  applyText(text:string){
    return  this.translations[this.activeLangue]?.PROPS[text];
   }
}
