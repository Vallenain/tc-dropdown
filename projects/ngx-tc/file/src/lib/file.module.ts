import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TcBaseModule } from '@ngx-tc/base';
import { FileComponent } from './file.component';


@NgModule({
  declarations: [
    FileComponent
  ],
  imports: [
    CommonModule,
    TcBaseModule
  ],
  exports: [
    TcBaseModule,
    FileComponent
  ]
})
export class TcFileModule { }
