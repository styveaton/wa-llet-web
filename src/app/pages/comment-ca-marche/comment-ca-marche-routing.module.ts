import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentCaMarcheComponent } from './comment-ca-marche.component';

const routes: Routes = [{ path: '', component: CommentCaMarcheComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentCaMarcheRoutingModule { }
