import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollUseComponent } from './poll-use.component';

describe('PollUseComponent', () => {
  let component: PollUseComponent;
  let fixture: ComponentFixture<PollUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
