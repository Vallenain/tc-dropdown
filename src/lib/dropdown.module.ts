import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TcBaseModule } from '@ngx-tc/base';

import { DropdownComponent } from './dropdown.component';
import { DropdownTriggerDirective } from './dropdown-trigger/dropdown-trigger.directive';
import { DropdownContentComponent } from './dropdown-content/dropdown-content.component';
import { DropdownHostDirective } from './dropdown-host/dropdown-host.directive';

@NgModule({
  declarations: [
    DropdownComponent,
    DropdownTriggerDirective,
    DropdownContentComponent,
    DropdownHostDirective
  ],
  imports: [
    CommonModule,
    TcBaseModule
  ],
  exports: [
    TcBaseModule,
    DropdownComponent,
    DropdownTriggerDirective,
  ]
})
export class TcDropdownModule { }
