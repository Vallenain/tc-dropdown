import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'tc-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {
  @HostBinding('class') get class() {
    return 'tc-form-group';
  };
}
