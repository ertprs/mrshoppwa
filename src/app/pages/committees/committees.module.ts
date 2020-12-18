import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
import { CommitteesComponent } from './committees/committees.component';

const routes: Routes = [
  {
    path: '',
    component: CommitteesComponent,
  },
  {
    path: ':id',
    component: MembersComponent,
  },
  {
    path: ':id/member/:id',
    component: MemberComponent,
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
    CommitteesComponent,
    MembersComponent,
    MemberComponent,
  ],
})
export class CommitteesModule { }
