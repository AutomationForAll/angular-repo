import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgphasesComponent } from './ngphases.component';

describe('NgphasesComponent', () => {
  let component: NgphasesComponent;
  let fixture: ComponentFixture<NgphasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgphasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgphasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
