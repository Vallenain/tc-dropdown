import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { BaseLayoutComponent } from './base-layout';
import { VerticalLayoutComponent } from './vertical';
import { PublicLayoutComponent } from './public';
import { NavbarComponent } from './components/navbar';
import { MenuComponent } from './components/menu';
import { FooterComponent } from './components/footer';
import { LogoComponent } from './components/logo';
import { SearchComponent } from './components/search';
import { ActionsComponent } from './components/actions';
import { NavbarSkeletonComponent } from './components/navbar-skeleton';
import { UIModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MalihuScrollbarModule.forRoot(),
    UIModule
  ],
  declarations: [
    BaseLayoutComponent,
    VerticalLayoutComponent,

    NavbarComponent,
    MenuComponent,
    FooterComponent,
    LogoComponent,
    SearchComponent,
    ActionsComponent,
    PublicLayoutComponent,
    NavbarSkeletonComponent
  ],
  exports: []
})
export class LayoutModule { }
