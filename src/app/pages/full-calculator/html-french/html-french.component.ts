import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-html-french',
  templateUrl: './html-french.component.html',
  styleUrls: ['./html-french.component.scss']
})
export class HtmlFrenchComponent {

  @Output() eventEmit = new EventEmitter();

childMethod() {
  this.eventEmit.emit();
}
}
