import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollMakeComponent } from './poll-make.component';

describe('PollMakeComponent', () => {
  let component: PollMakeComponent;
  let fixture: ComponentFixture<PollMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
