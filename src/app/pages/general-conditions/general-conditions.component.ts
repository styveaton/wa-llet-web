import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';

@Component({
  selector: 'app-general-conditions',
  templateUrl: './general-conditions.component.html',
  styleUrls: ['./general-conditions.component.scss']
})
export class GeneralConditionsComponent extends Base {

  constructor(router: Router,  translate: TranslateService){
    super(router,translate)
  }
  
    openViewPolicy(){
      this.router.navigate(['/privacy-policy']);
    }
}
