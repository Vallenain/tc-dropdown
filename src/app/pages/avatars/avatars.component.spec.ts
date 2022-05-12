import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvatarsComponent } from './avatars.component';

describe('AvatarsComponent', () => {
  let component: AvatarsComponent;
  let fixture: ComponentFixture<AvatarsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
