import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { view, size } from '@ngx-tc/base';

@Component({
  selector: 'tc-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  @Input() title: string = 'file name';
  @Input() type: string = '*';
  @Input() size: size = size.default;
  @Input() view: view = view.primary;
  @Input() icon: string;
  @Input() image: string;
  @Input() delete: boolean;
  @Input() load: boolean;

  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

  @HostBinding('class') get class() {
    return `tc-file file-${this.view.toLocaleLowerCase()} file-${this.size.toLocaleLowerCase()}`;
  };

  deleteFile() {
    this.onDelete.emit();
  }
}
