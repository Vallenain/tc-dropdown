import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { IPageData } from '../../../interfaces/page-data';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @HostBinding('class') get class() {
    return 'footer';
  };
  @HostBinding('class.loaded') @Input() loaded: boolean;
  @HostBinding('class.boxed') @Input() boxed: boolean;

  @Input() pageData: IPageData;

  version: string;

  constructor() {
    this.version = environment.version;
  }

  ngOnInit() { }
}
