import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';

@Component({
  selector: 'app-my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.scss']
})
export class MyInformationComponent  extends Base{


  constructor(router: Router,  translate: TranslateService){
    super(router,translate)
  }

}
