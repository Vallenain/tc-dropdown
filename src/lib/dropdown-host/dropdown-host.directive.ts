import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tc-dropdown-host]'
})
export class DropdownHostDirective {
  constructor(
    public viewContainerRef: ViewContainerRef,
    public templateRef: TemplateRef<unknown>
  ) { }
}
