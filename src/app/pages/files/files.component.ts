import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { size, view } from '@ngx-tc/base';

import { BasePageComponent } from '../base-page/base-page.component';
import { IAppState } from '../../interfaces/app-state';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'page-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class PageFilesComponent extends BasePageComponent implements OnInit, OnDestroy {
  size = size;
  views = view;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Files',
      loaded: true,
      breadcrumbs: [
        {
          title: 'Components',
          route: '/'
        },
        {
          title: 'Files'
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
