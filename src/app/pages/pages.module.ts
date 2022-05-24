import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '../layout/layout.module';
import { BasePageComponent } from './base-page/base-page.component';
import { pages } from '../helpers/constants/pages';

import { TcInputModule } from '@ngx-tc/input';
import { TcCardModule } from '@ngx-tc/card';
import { TcFormGroupModule } from '@ngx-tc/form-group';
import { TcFormLabelModule } from '@ngx-tc/form-label';
import { TcFormDescriptionModule } from '@ngx-tc/form-description';
import { TcButtonModule } from '@ngx-tc/button';
import { TcRatingModule } from '@ngx-tc/rating';
import { TcAlertModule } from '@ngx-tc/alert';
import { TcAvatarModule } from '@ngx-tc/avatar';
import { TcBadgeModule } from '@ngx-tc/badge';
import { TcFileModule } from '@ngx-tc/file';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    LayoutModule,
    TcInputModule,
    TcFormGroupModule,
    TcFormLabelModule,
    TcFormDescriptionModule,
    TcCardModule,
    TcButtonModule,
    TcRatingModule,
    TcAlertModule,
    TcAvatarModule,
    TcBadgeModule,
    TcFileModule,
  ],
  declarations: [
    BasePageComponent,
    ...pages,
  ],
  exports: []
})
export class PagesModule {}
