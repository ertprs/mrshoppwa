import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './services/common/check-tutorial.service';
import { DataResolverService } from './services/common/data-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/tutorial', pathMatch: 'full' },
  {
    path: 'abstracts',
    loadChildren: () => import('./pages/abstracts/abstracts.module').then((m) => m.AbstractsModule),
    resolve: { isCache: DataResolverService },
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then((m) => m.EventsModule),
    resolve: { isCache: DataResolverService },
  },
  {
    path: 'committees',
    loadChildren: () => import('./pages/committees/committees.module').then((m) => m.CommitteesModule),
    resolve: { isCache: DataResolverService },
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./pages/sponsors/sponsors.module').then((m) => m.SponsorsModule),
    resolve: { isCache: DataResolverService },
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then((m) => m.TutorialPageModule),
    canLoad: [CheckTutorial],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then((m) => m.SignUpPageModule),
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
