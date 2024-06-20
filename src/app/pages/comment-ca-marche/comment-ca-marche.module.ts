import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentCaMarcheRoutingModule } from './comment-ca-marche-routing.module';
import { CommentCaMarcheComponent } from './comment-ca-marche.component';


@NgModule({
  declarations: [
    CommentCaMarcheComponent
  ],
  imports: [
    CommonModule,
    CommentCaMarcheRoutingModule
  ]
})
export class CommentCaMarcheModule { }
