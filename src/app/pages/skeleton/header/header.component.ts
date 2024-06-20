import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';
import * as translateHeader from '../../../langues/header';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends Base{


  translations:any = {}; 
  langues:any=[];
  selectLang:any={};

  constructor(router: Router, translate: TranslateService){
    super(router, translate);
    this.translations = translateHeader;
    this.initLang();
  }

  initLang(){
    let context = this;
    this.langues.push({
      text:this.applyText('md_header_text_1'),
      value:'en'
    });

    this.langues.push({
      text:this.applyText('md_header_text_2'),
      value:'fr'
    });

    this.langues.forEach(function (e: { value: any; }) {
      if(e.value == context.activeLangue){
        context.selectLang = e;
      }
    }); 
  }

  applyText(text:string){
   return  this.translations[this.activeLangue]?.PROPS[text];
  }
  
  openViewCommentCaMarche(){
    this.router.navigate(['/how-it-works']);
  }

  openViewAide(){
    this.router.navigate(['/faq']);
  }

  openViewLogin(){
    this.router.navigate(['/login']);
  }

  openViewRegistration(){
    this.router.navigate(['/registration']);
  }
  openViewTransaction(){
    this.router.navigate(['/transaction']);
  }
  openViewSponsor(){
    this.router.navigate(['/sponsor-a-friend']);
  }
  openViewInformations(){
    this.router.navigate(['/my-informations']);
  }
  onChangeLangue(e:any) {
    console.log('Method not implemented.',e.target.value);
    let langue = e.target.value;
     
      var lfr = langue=='fr' ? 1 : 0;
      var len = langue=='en' ? 1 : 0;
      localStorage.setItem('langue', JSON.stringify({ fr: lfr, en: len }));
      
      window.location.reload();
    }
}
