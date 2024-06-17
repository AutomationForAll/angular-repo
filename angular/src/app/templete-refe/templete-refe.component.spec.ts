import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteRefeComponent } from './templete-refe.component';

describe('TempleteRefeComponent', () => {
  let component: TempleteRefeComponent;
  let fixture: ComponentFixture<TempleteRefeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleteRefeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleteRefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
