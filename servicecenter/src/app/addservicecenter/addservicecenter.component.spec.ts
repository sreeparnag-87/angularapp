import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddservicecenterComponent } from './addservicecenter.component';

describe('AddservicecenterComponent', () => {
  let component: AddservicecenterComponent;
  let fixture: ComponentFixture<AddservicecenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddservicecenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddservicecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
