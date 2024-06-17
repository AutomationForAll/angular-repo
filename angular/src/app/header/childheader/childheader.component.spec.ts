import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildheaderComponent } from './childheader.component';

describe('ChildheaderComponent', () => {
  let component: ChildheaderComponent;
  let fixture: ComponentFixture<ChildheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
