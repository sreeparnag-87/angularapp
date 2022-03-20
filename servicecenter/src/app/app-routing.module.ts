import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddservicecenterComponent } from './addservicecenter/addservicecenter.component';
import {Router} from '@angular/router';
import { CenterprofileComponent } from './centerprofile/centerprofile.component';
const routes: Routes = [
  { path: '', redirectTo: '/admin/addServiceCenter', pathMatch: 'full' },
  {
    path:'admin/addServiceCenter',component: AddservicecenterComponent,
  },
  {
    path:'admin/centerprofile',component: CenterprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
