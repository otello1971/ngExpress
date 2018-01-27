import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { Toolbar2Component } from './toolbar2.component';
import { MaterialModule } from '../../shared/material.module';

// Cards to show
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';

const toolbarRoutes: Routes = [
  {
    path: '',
    component: Toolbar2Component,
    outlet: 'toolbar2'
  },
  {
    path: 'toolbar2',
    component: Toolbar2Component,
    outlet: 'toolbar2',
    children: [
      {
        path: 'card1',
        component: Card1Component,
        outlet: 'cards'
      },
      {
        path: 'card2',
        component: Card2Component,
        outlet: 'cards'
      },
      {
        path: 'card3',
        component: Card3Component,
        outlet: 'cards'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(toolbarRoutes),
  ],
  declarations: [
    Toolbar2Component,
    Card1Component,
    Card2Component,
    Card3Component
  ],
  providers: []
})
export class Toolbar2Module { }
