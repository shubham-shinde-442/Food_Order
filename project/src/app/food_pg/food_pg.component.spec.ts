import { ComponentFixture, TestBed } from '@angular/core/testing';

import { food_pg.component } from './food_pg.component';

describe('food_pg.component', () => {
  let component: food_pg.component;
  let fixture: ComponentFixture<food_pg.component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ food_pg.component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(food_pg.component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
