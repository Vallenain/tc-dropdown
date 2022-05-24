import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'tc-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @HostBinding('class') get class() {
    return 'tc-avatar';
  };
  @Input() src: string;
  @Input() initials: string;
  @Input() icon: string;
  @Input() alt: string;
  @HostBinding('class.with-badge') @Input() badge: boolean;
  @HostBinding('class.avatar-load') @Input() load: boolean;
  @HostBinding('style.--tc-avatar-size') @Input() size: string;
  @HostBinding('style.--tc-avatar-badge-bg') @Input() badgeBg: string;
}
