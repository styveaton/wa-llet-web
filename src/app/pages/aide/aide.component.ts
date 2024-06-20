import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';
import * as translateAide from '../../langues/aide';
@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.scss']
})
export class AideComponent  extends Base{

  translations:any = {};

  constructor(router: Router,  translate: TranslateService){
    super(router,translate);
    this.translations = translateAide;
  }

  openViewMyAccount(){
    this.router.navigate(['/gerer-mon-compte']);
  }

  applyText(text:string){
    return  this.translations[this.activeLangue]?.PROPS[text];
   }
}
