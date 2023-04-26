import {
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';

import { Align, align } from '@ngx-tc/base';

import { DropdownTriggerDirective } from './dropdown-trigger/dropdown-trigger.directive';
import { DropdownContentComponent } from './dropdown-content/dropdown-content.component';
import { DropdownHostDirective } from './dropdown-host/dropdown-host.directive';

@Component({
  selector: 'tc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @HostBinding('class.opened') @Input() opened: boolean = false;
  @ContentChild(DropdownTriggerDirective, { static: true }) dropdownButton: DropdownTriggerDirective;
  @ViewChild(DropdownHostDirective, { static: true }) dropdownHost!: DropdownHostDirective;
  @Input() overlay: boolean = true;
  @Input() appendToBody: boolean = false;
  @Input() animation: string;
  @Input() width: number;
  @Input() maxHeight: number;
  @Input() bg: string;
  @Input() panelClass: string;
  @Input() align: Align = align.start;
  delay: number = 0;

  constructor() {}

  ngOnInit() {
    if (this.dropdownButton) {
      this.dropdownButton.toggle.subscribe((state: boolean) => {
        this.toggleDropdown(state);
      });
    }
  }

  toggleDropdown(state: boolean) {
    if (this.opened) {
      this.removeDynamicComponent();
    } else {
      this.createDynamicComponent();
    }

    this.opened = state;
  }

  createDynamicComponent() {
    const contentView = this.dropdownHost.templateRef.createEmbeddedView(null);
    contentView.detectChanges();

    const viewContainerRef = this.dropdownHost.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DropdownContentComponent>(
      DropdownContentComponent,
      { projectableNodes: [contentView.rootNodes] }
    );

    this.setComponentProperties(componentRef.instance);
  }

  removeDynamicComponent() {
    const viewContainerRef = this.dropdownHost.viewContainerRef;

    setTimeout(() => {
      viewContainerRef.clear();
    }, 300);
  }

  setComponentProperties(component: DropdownContentComponent) {
    const triggerParams: DOMRect = this.dropdownButton.getTriggerParams();

    component.overlay = this.overlay;
    component.appendToBody = this.appendToBody;
    component.animation = this.animation;
    component.width = this.width;
    component.triggerWidth = triggerParams.width;
    component.maxHeight = this.maxHeight;
    component.bg = this.bg;
    component.panelClass = this.panelClass;
    component.align = this.align;

    // append dropdown content to the body
    if (this.appendToBody) {
      this.delay = 100;

      component.appendComponentToBody();
      component.setParameters(triggerParams);
    }

    setTimeout(() => {
      component.opened = true;
    }, this.delay);

    component.closeDropdown.subscribe(() => {
      this.toggleDropdown(false);
      this.dropdownButton.active = false;
    });
  }
}
