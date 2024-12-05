import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';
import { ModifyComponent } from './modify/modify.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all', component: AllComponent },
  { path: 'add', component: AddComponent },
  { path: 'modify/:id', component: ModifyComponent },
  { path: 'detail/:id', component: DetailComponent },
];
