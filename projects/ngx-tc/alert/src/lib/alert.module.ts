import { NgModule } from '@angular/core';

import { TcBaseModule } from '@ngx-tc/base';

import { AlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    TcBaseModule
  ],
  exports: [
    AlertComponent,
    TcBaseModule
  ]
})
export class TcAlertModule { }
