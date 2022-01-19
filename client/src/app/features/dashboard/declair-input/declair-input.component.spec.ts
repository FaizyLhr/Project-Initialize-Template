import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclairInputComponent } from './declair-input.component';

describe('DeclairInputComponent', () => {
  let component: DeclairInputComponent;
  let fixture: ComponentFixture<DeclairInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclairInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclairInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
