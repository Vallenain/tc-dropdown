import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'page-t-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class PageAvatarsComponent extends BasePageComponent implements OnInit, OnDestroy {
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Avatars',
      loaded: true,
      breadcrumbs: [
        {
          title: 'UI Kit',
          route: 'default-dashboard'
        },
        {
          title: 'Components',
          route: 'default-dashboard'
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
