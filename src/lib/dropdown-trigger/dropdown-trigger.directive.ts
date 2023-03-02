import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[tc-dropdown-trigger]'
})
export class DropdownTriggerDirective {
  @HostBinding('class.tc-dropdown-trigger') dropdownTrigger = true;
  @HostBinding('class.opened') @Input() active: boolean = false;
  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    event.preventDefault();

    this.active = !this.active;
    this.toggle.emit(this.active);
  }
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private element: ElementRef) {}

  getTriggerParams(): DOMRect {
    return this.element.nativeElement.getBoundingClientRect();
  }
}
