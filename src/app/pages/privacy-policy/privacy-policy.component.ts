import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent  extends Base{


    constructor(router: Router, translate: TranslateService){
      super(router, translate);
    }
  
    openViewPolicy(){
      this.router.navigate(['/privacy-policy']);
    }
    
    
    openViewGeneralConditions(){
      this.router.navigate(['/general-conditions']);
    }
}
