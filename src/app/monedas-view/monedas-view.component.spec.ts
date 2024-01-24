import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedasViewComponent } from './monedas-view.component';

describe('MonedasViewComponent', () => {
  let component: MonedasViewComponent;
  let fixture: ComponentFixture<MonedasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonedasViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonedasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
