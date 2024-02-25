import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugComponent } from './hug.component';

describe('HugComponent', () => {
  let component: HugComponent;
  let fixture: ComponentFixture<HugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HugComponent]
    });
    fixture = TestBed.createComponent(HugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
