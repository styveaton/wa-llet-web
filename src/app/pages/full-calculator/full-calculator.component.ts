import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';

@Component({
  selector: 'app-full-calculator',
  templateUrl: './full-calculator.component.html',
  styleUrls: ['./full-calculator.component.scss']
})
export class FullCalculatorComponent extends Base {
  constructor(router: Router,  translate: TranslateService){
    super(router,translate)
  }
 
 
  parentMethod() {
    alert("name ");
  }
}
