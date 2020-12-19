import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AbstractsComponent } from './abstracts/abstracts.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AbstractsFilterComponent } from './abstracts-filter/abstracts-filter.component';
import { AbstractDetailComponent } from './abstract-detail/abstract-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AbstractsComponent,
  },
  {
    path: ':id',
    component: AbstractDetailComponent,
  },
  {
    path: ':id/author/:id',
    component: AuthorDetailComponent,
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [
    AbstractsComponent,
    AuthorDetailComponent,
    AbstractsFilterComponent,
    AbstractDetailComponent,
  ],
  entryComponents: [
    AbstractsFilterComponent,
  ],
})
export class AbstractsModule { }
