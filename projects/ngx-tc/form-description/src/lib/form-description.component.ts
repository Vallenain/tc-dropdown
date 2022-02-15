import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'tc-form-description',
  templateUrl: './form-description.component.html',
  styleUrls: ['./form-description.component.scss'],
})
export class FormDescriptionComponent {
  @HostBinding('class') get class() {
    return 'tc-form-description';
  };
}
