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

@Component({
  selector: 'tc-dropdown-content',
  templateUrl: './dropdown-content.component.html',
  styleUrls: ['./dropdown-content.component.scss']
})
export class DropdownContentComponent implements OnInit {
  @HostBinding('class.tc-dropdown-content-wrap') dropdownContent = true;
  @HostBinding('class.opened') @Input() opened: boolean = false;
  @HostBinding('class.tc-dropdown-content-outside') @Input() appendToBody: boolean;
  @HostBinding('class') @Input() panelClass: string;
  @HostBinding('style.--tc-dropdown-left.px') private positionLeft: number;
  @HostBinding('style.--tc-dropdown-top.px') private positionTop: number;
  @HostBinding('style.--tc-dropdown-width.px') @Input() width: number;
  @HostBinding('style.--tc-dropdown-max-height.px') @Input() maxHeight: number;
  @HostBinding('style.--tc-dropdown-bg') @Input() bg: string;
  @Input() overlay: boolean;
  @Input() animation: string;
  @Output() closeDropdown: EventEmitter<void> = new EventEmitter<void>();

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
  // close on resize
  @HostListener('window:resize', ['$event']) onResize() {
    if (this.opened) {
      this.hide();
    }
  }

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() { }

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

  // set dropdown content parameters
  setParameters(params: DOMRect) {
    this.positionLeft = params.left;
    this.positionTop = params.top + params.height;
  }
}
