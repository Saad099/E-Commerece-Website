import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'app-goal',
    loadChildren: () => import('./pages/app-goal/app-goal.module').then( m => m.AppGoalPageModule)
  },
  {
    path: 'representing',
    loadChildren: () => import('./pages/representing/representing.module').then( m => m.RepresentingPageModule)
  },
  {
    path: 'prototype',
    loadChildren: () => import('./pages/prototype/prototype.module').then( m => m.PrototypePageModule)
  },
  {
    path: 'evaluation',
    loadChildren: () => import('./pages/evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },
  {
    path: 'framework',
    loadChildren: () => import('./pages/framework/framework.module').then( m => m.FrameworkPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
