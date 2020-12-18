import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './services/common/check-tutorial.service';
import { DataResolverService } from './services/common/data-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/walkthrough', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('@app/pages/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule),
    // canLoad: [CheckTutorial],
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then((m) => m.AccountPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
