import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TcBaseModule } from '@ngx-tc/base';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TcBaseModule
  ],
  exports: [
    ButtonComponent,
    TcBaseModule
  ]
})
export class TcButtonModule { }
