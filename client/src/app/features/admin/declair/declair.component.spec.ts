import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclairComponent } from './declair.component';

describe('DeclairComponent', () => {
  let component: DeclairComponent;
  let fixture: ComponentFixture<DeclairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
