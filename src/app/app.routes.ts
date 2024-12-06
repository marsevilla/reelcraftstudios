import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './components/all/all.component';
import { AddComponent } from './components/add/add.component';
import { ModifyComponent } from './components/modify/modify.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all', component: AllComponent },
  { path: 'add', component: AddComponent },
  { path: 'modify/:id', component: ModifyComponent },
  { path: 'detail/:id', component: DetailComponent },
];
