import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddwordComponent } from './addword/addword.component';
import {PraxisComponent} from './praxis/praxis.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/vocabulary', pathMatch: 'full' },
  { path: 'vocabulary', component: AddwordComponent},
  { path: 'praxis', component:  PraxisComponent},
  { path: 'setting', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
