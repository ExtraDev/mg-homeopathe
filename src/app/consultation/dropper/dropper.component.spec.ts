import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropperComponent } from './dropper.component';

describe('DropperComponent', () => {
  let component: DropperComponent;
  let fixture: ComponentFixture<DropperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropperComponent]
    });
    fixture = TestBed.createComponent(DropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
