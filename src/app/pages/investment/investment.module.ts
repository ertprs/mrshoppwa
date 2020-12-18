import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InvestmentComponent } from './investment/investment.component';
import { InvestmentDetailComponent } from './investment-detail/investment-detail.component';
import { InvestmentFilterComponent } from './investment-filter/investment-filter.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentComponent,
  },
  {
    path: ':id',
    component: InvestmentDetailComponent,
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
    InvestmentComponent,
    InvestmentFilterComponent,
    InvestmentDetailComponent,
  ],
  entryComponents: [
    InvestmentFilterComponent,
  ],
})
export class Investmentodule { }
