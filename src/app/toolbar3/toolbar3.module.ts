import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Cards to show
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';

const toolbarRoutes: Routes = [
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
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(toolbarRoutes),
  ],
  declarations: [
    Card1Component,
    Card2Component,
    Card3Component
  ],
  providers: []
})
export class Toolbar3Module { }
