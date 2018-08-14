import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';


const routes: Routes = [
  { path: '', component: DummyComponent,
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
