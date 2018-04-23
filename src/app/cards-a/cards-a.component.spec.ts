import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAComponent } from './cards-a.component';

describe('CardsAComponent', () => {
  let component: CardsAComponent;
  let fixture: ComponentFixture<CardsAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
