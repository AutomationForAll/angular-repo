import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentrefComponent } from './componentref.component';

describe('ComponentrefComponent', () => {
  let component: ComponentrefComponent;
  let fixture: ComponentFixture<ComponentrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentrefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
