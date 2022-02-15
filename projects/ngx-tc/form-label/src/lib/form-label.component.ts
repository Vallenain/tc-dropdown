import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'tc-form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.scss']
})
export class FormLabelComponent {
  @HostBinding('class') get class() {
    return 'tc-form-label';
  };
}
