import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomClassComponent } from './cutom-class.component';

describe('CutomClassComponent', () => {
  let component: CutomClassComponent;
  let fixture: ComponentFixture<CutomClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
