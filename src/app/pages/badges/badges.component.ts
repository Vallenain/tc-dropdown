import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { view } from '@ngx-tc/base';
import { badgeArrow, badgeSize } from '@ngx-tc/badge';

import { BasePageComponent } from '../base-page/base-page.component';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'page-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class PageBadgesComponent extends BasePageComponent implements OnInit, OnDestroy {
  arrowPosition = badgeArrow;
  badgeSizes = badgeSize;
  views = view;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Badges',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Components',
          route: '/'
        },
        {
          title: 'Badges'
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
