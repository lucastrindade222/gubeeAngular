import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTargetMarketComponent } from './create-target-market.component';

describe('CreateTargetMarketComponent', () => {
  let component: CreateTargetMarketComponent;
  let fixture: ComponentFixture<CreateTargetMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTargetMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTargetMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
