import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TcBaseModule } from '@ngx-tc/base';

import { CardComponent } from './card.component';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    TcBaseModule
  ],
  exports: [
    CardComponent,
    TcBaseModule
  ]
})
export class TcCardModule { }
