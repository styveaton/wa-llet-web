import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';
import * as translatCommentCaMarche from '../../langues/comment-ca-marche';
@Component({
  selector: 'app-comment-ca-marche',
  templateUrl: './comment-ca-marche.component.html',
  styleUrls: ['./comment-ca-marche.component.scss']
})
export class CommentCaMarcheComponent  extends Base{

  translations:any = {};
  constructor(router: Router,  translate: TranslateService){
    super(router,translate);
    this.translations = translatCommentCaMarche;
  }

  applyText(text:string){
    return  this.translations[this.activeLangue]?.PROPS[text];
   }
   openViewmobile(){
    this.router.navigate(['/mobile-app']);
  }
}
