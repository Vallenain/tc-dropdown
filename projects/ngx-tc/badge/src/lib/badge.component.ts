import { Component, HostBinding, Input } from '@angular/core';

import { view } from '@ngx-tc/base';
import { badgeArrow, badgeSize } from './badge';

@Component({
  selector: 'tc-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @HostBinding('class') get class() {
    return 'tc-badge';
  };
  @HostBinding('class.badge-xs') get xs() { return this.size === badgeSize.xs };
  @HostBinding('class.badge-sm') get sm() { return this.size === badgeSize.sm};
  @HostBinding('class.badge-lg') get lg() { return this.size === badgeSize.lg};
  @HostBinding('class.badge-primary') get typePrimary() { return this.view === view.primary};
  @HostBinding('class.badge-accent') get typeAccent() { return this.view === view.accent};
  @HostBinding('class.badge-success') get typeSuccess() { return this.view === view.success};
  @HostBinding('class.badge-info') get typeInfo() { return this.view === view.info};
  @HostBinding('class.badge-warning') get typeWarning() { return this.view === view.warning};
  @HostBinding('class.badge-error') get typeError() { return this.view === view.error};
  @HostBinding('class.badge-outline') @Input() outline: boolean;
  @HostBinding('class.arrow-top') get arrowTop() { return this.arrow === badgeArrow.top};
  @HostBinding('class.arrow-right') get arrowRight() { return this.arrow === badgeArrow.right};
  @HostBinding('class.arrow-bottom') get arrowBottom() { return this.arrow === badgeArrow.bottom};
  @HostBinding('class.arrow-left') get arrowLeft() { return this.arrow === badgeArrow.left};

  @Input() view: string = view.primary;
  @Input() size: string = badgeSize.default;
  @Input() arrow: badgeArrow;
}
