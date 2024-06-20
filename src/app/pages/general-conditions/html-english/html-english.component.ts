import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';

@Component({
  selector: 'app-html-english',
  templateUrl: './html-english.component.html',
  styleUrls: ['../general-conditions.component.scss']
})
export class HtmlEnglishComponent extends Base{
  constructor(router: Router, translate: TranslateService){
    super(router, translate);
  }

  openViewPolicy(){
    this.router.navigate(['/privacy-policy']);
  }

}
