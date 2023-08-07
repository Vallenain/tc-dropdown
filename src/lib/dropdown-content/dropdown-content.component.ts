import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  combineLatest,
  map,
  Observable,
  fromEvent,
  startWith,
  distinctUntilChanged,
  shareReplay,
} from 'rxjs';

import { Align } from '@ngx-tc/base';
import { Position } from '../dropdown.component';

@Component({
  selector: 'tc-dropdown-content',
  templateUrl: './dropdown-content.component.html',
  styleUrls: ['./dropdown-content.component.scss']
})
export class DropdownContentComponent implements OnInit {
  @HostBinding('class.tc-dropdown-content-wrap') private dropdownContent = true;
  @HostBinding('class.opened') @Input() opened: boolean = false;
  @HostBinding('class.tc-dropdown-content-outside') @Input() appendToBody: boolean;
  @HostBinding('class') get additionalClasses(): string {
    return `tc-dropdown-content-${this.align} tc-dropdown-content-${this.position} ${this.panelClass || ''}`;
  }
  @HostBinding('style.--tc-dropdown-width.px') @Input() width: number;
  @HostBinding('style.--tc-dropdown-max-height.px') @Input() maxHeight: number;
  @HostBinding('style.--tc-dropdown-bg') @Input() bg: string;
  @Input() panelClass: string;
  @Input() align: Align;
  @Input() position: Position;
  @Input() overlay: boolean;
  @Input() animation: string;
  @Output() closeDropdown: EventEmitter<void> = new EventEmitter<void>();
  readonly direction: 'ltr' | 'rtl' = 'ltr';

  positionStart$: Observable<number>;
  positionAbove$: Observable<number>;
  positionBelow$: Observable<number>;
  private windowScroll$ = fromEvent(window, 'scroll').pipe(
    map(() => window.scrollY),
    startWith(0), distinctUntilChanged(), shareReplay(1)
  );
  triggerParams$: Observable<DOMRect>;

  // animation type
  @HostBinding('class.fadeInUp-animation') get fadeInUp () {
    return this.animation === 'fadeInUp' ? true : false;
  }
  @HostBinding('class.fadeInDown-animation') get fadeInDown () {
    return this.animation === 'fadeInDown' ? true : false;
  }
  @HostBinding('class.fadeInLeft-animation') get fadeInLeft () {
    return this.animation === 'fadeInLeft' ? true : false;
  }
  @HostBinding('class.fadeInRight-animation') get fadeInRight () {
    return this.animation === 'fadeInRight' ? true : false;
  }
  @HostBinding('class.zoom-animation') get zoom () {
    return this.animation === 'zoom' ? true : false;
  }

  // close from Esc key
  @HostListener('window:keydown', ['$event']) keyboardInput(event: KeyboardEvent) {
    if (this.opened && event.key === 'Escape') {
      this.hide();
    }
  }

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.direction = this.document.dir && this.document.dir === 'rtl' ? 'rtl' : 'ltr';
  }

  ngOnInit() {
    this.setYPosition();
    this.setStartPosition();
  }

  // show dropdown content
  show() {
    this.opened = true;
  }

  // hide dropdown content
  hide() {
    this.opened = false;
    this.closeDropdown.emit();
  }

  // append to body
  appendComponentToBody() {
    this.document.body.appendChild(this.element.nativeElement);
  }

  // set start position
  private setStartPosition() {
    this.positionStart$ = combineLatest([this.triggerParams$]).pipe(
      map(([params]) => this.direction === 'rtl'
        ?  this.document.body.offsetWidth - params.left - params.width
        : params.left
      ),
      map((positionLeft) => this.appendToBody ? positionLeft : 0)
    );
  }

  // set Y position
  private setYPosition() {
    this.positionBelow$ = combineLatest([this.triggerParams$, this.windowScroll$]).pipe(
      map(([params, scroll]) => params.height + (this.appendToBody ? params.top - scroll : 0))
    );

    this.positionAbove$ = combineLatest([this.triggerParams$, this.windowScroll$]).pipe(
      map(([params, scroll]) => !this.appendToBody ? params.height : (window.innerHeight - params.top + scroll))
    );
  }
}
