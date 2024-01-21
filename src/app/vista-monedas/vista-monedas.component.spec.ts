import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMonedasComponent } from './vista-monedas.component';

describe('VistaMonedasComponent', () => {
  let component: VistaMonedasComponent;
  let fixture: ComponentFixture<VistaMonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaMonedasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaMonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
