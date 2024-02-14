import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityUpdaterComponent } from './quantity-updater.component';

describe('QuantityUpdaterComponent', () => {
  let component: QuantityUpdaterComponent;
  let fixture: ComponentFixture<QuantityUpdaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityUpdaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuantityUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
