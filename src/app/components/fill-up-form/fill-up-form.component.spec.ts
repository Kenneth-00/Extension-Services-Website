import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillUpFormComponent } from './fill-up-form.component';

describe('FillUpFormComponent', () => {
  let component: FillUpFormComponent;
  let fixture: ComponentFixture<FillUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillUpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
