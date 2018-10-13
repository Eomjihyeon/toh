import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterHeroComponent } from './register-hero/register-hero.component';
import { ManageHeroComponent } from './manage-hero/manage-hero.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: 'register', component: RegisterHeroComponent},
      {path: 'manage', component: ManageHeroComponent},
      {path : '' , redirectTo : '/admin/register'}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexComponent,
    DashboardComponent,
    RegisterHeroComponent,
    ManageHeroComponent
  ]
})
export class AdminModule { }
