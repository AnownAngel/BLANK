import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';


const routes: Routes = [
  { path: '', component: StartpageComponent,
  redirectTo: '',
  pathMatch: 'full'
}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
