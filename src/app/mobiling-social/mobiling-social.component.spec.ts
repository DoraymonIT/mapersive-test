import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilingSocialComponent } from './mobiling-social.component';

describe('MobilingSocialComponent', () => {
  let component: MobilingSocialComponent;
  let fixture: ComponentFixture<MobilingSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilingSocialComponent]
    });
    fixture = TestBed.createComponent(MobilingSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
