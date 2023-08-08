import {
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';

import { Align, align } from '@ngx-tc/base';

import { DropdownTriggerDirective } from './dropdown-trigger/dropdown-trigger.directive';
import { DropdownContentComponent } from './dropdown-content/dropdown-content.component';
import { DropdownHostDirective } from './dropdown-host/dropdown-host.directive';

export type Position = 'below' | 'above';
export enum position {
  below = 'below',
  above = 'above'
}

@Component({
  selector: 'tc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnDestroy {
  @HostBinding('class.opened') private opened: boolean = false;
  @ContentChild(DropdownTriggerDirective, { static: true }) private dropdownButton: DropdownTriggerDirective;
  @ViewChild(DropdownHostDirective, { static: true }) private dropdownHost!: DropdownHostDirective;
  @Input() overlay: boolean = true;
  @Input() appendToBody: boolean = false;
  @Input() animation: string;
  @Input() width: number;
  @Input() maxHeight: number;
  @Input() bg: string;
  @Input() panelClass: string;
  @Input() align: Align = align.start;
  @Input() position: Position = position.below;
  @Output() closed: EventEmitter<void> = new EventEmitter<void>;
  private delay: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    if (this.dropdownButton) {
      this.dropdownButton.toggle.subscribe(([state, params$]) => {
        this.toggleDropdown(state, params$);
      });
    }
  }

  ngOnDestroy() {
    this.removeDynamicComponent();
  }

  private toggleDropdown(state: boolean, params$?: Observable<DOMRect>) {
    if (state) {
      this.createDynamicComponent(params$);
    } else {
      this.removeDynamicComponent();
    }
  }

  private createDynamicComponent(params$: Observable<DOMRect>) {
    const contentView = this.dropdownHost.templateRef.createEmbeddedView(null);
    contentView.detectChanges();

    const viewContainerRef = this.dropdownHost.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DropdownContentComponent>(
      DropdownContentComponent,
      { projectableNodes: [contentView.rootNodes] }
    );

    this.setComponentProperties(componentRef.instance, params$);
    this.document.body.classList.add('opened-tc-dropdown');
    this.opened = true;
  }

  private removeDynamicComponent() {
    const viewContainerRef = this.dropdownHost.viewContainerRef;

    this.closed.emit();
    this.document.body.classList.remove('opened-tc-dropdown');
    this.opened = false;
    setTimeout(() => {
      viewContainerRef.clear();
    }, 300);
  }

  private setComponentProperties(component: DropdownContentComponent, params$: Observable<DOMRect>) {
    component.overlay = this.overlay;
    component.appendToBody = this.appendToBody;
    component.animation = this.animation;
    component.width = this.width;
    component.maxHeight = this.maxHeight;
    component.bg = this.bg;
    component.panelClass = this.panelClass;
    component.align = this.align;
    component.position = this.position;
    component.triggerParams$ = params$;

    // append dropdown content to the body
    if (this.appendToBody) {
      this.delay = 100;

      component.appendComponentToBody();
    }

    setTimeout(() => {
      component.show();
    }, this.delay);

    component.closeDropdown.subscribe(() => {
      this.toggleDropdown(false);
      this.dropdownButton.close();
    });
  }
}
