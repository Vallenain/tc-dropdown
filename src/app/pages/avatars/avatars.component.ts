import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../../../interfaces/app-state';
import { BasePageComponent } from '../../base-page/base-page.component';

@Component({
  selector: 'page-t-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class PageTAvatarsComponent extends BasePageComponent implements OnInit, OnDestroy {
  constructor(store: Store<AppState>) {
    super(store);

    this.pageData = {
      title: 'Avatars',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI elements',
          route: './dashboard'
        },
        {
          title: 'Theme components',
          route: './dashboard'
        },
        {
          title: 'Avatars'
        }
      ]
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
