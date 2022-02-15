import { NgModule } from '@angular/core';

import { BaseComponent } from './base.component';
import { ShapeDirective } from './directives/shape/shape.directive';
import { ColorDirective } from './directives/color/color.directive';
import { BgColorDirective } from './directives/bg-color/bg-color.directive';
import { BorderColorDirective } from './directives/border-color/border-color.directive';
import { BorderStyleDirective } from './directives/border-style/border-style.directive';
import { GradientDirective } from './directives/gradient/gradient.directive';

const list = [
  BaseComponent,
  ShapeDirective,
  ColorDirective,
  BgColorDirective,
  BorderColorDirective,
  BorderStyleDirective,
  GradientDirective
];

@NgModule({
  declarations: [
    ...list
  ],
  imports: [],
  exports: [
    ...list
  ]
})
export class TcBaseModule { }
