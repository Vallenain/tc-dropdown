import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TcBaseModule } from '@ngx-tc/base';
import { BadgeComponent } from './badge.component';


@NgModule({
  declarations: [
    BadgeComponent
  ],
  imports: [
    CommonModule,
    TcBaseModule
  ],
  exports: [
    TcBaseModule,
    BadgeComponent
  ]
})
export class TcBadgeModule { }
