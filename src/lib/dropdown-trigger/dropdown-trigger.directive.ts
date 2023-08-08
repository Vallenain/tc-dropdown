import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  OnInit,
  Output
} from '@angular/core';
import { fromEvent, map, merge, Observable } from 'rxjs';

@Directive({
  selector: '[tc-dropdown-trigger]'
})
export class DropdownTriggerDirective implements OnInit {
  @HostBinding('class.tc-dropdown-trigger') private dropdownTrigger = true;
  @HostBinding('class.opened') private active: boolean = false;
  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    event.preventDefault();

    this.active = !this.active;
    this.toggle.emit([this.active, this.triggerParams$]);
  }
  @Output() toggle: EventEmitter<[boolean, Observable<DOMRect>]> = new EventEmitter<[boolean, Observable<DOMRect>]>();
  private triggerParams$: Observable<DOMRect>;
  private windowClick$ = fromEvent(window, 'click');
  private windowResize$ = merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationchange'));

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.triggerParams$ = merge(
      this.windowClick$,
      this.windowResize$
    ).pipe(
      map(() => this.getTriggerParams())
    );
  }

  private getTriggerParams(): DOMRect {
    return this.element.nativeElement.getBoundingClientRect();
  }

  close() {
    this.active = false;
  }
}

