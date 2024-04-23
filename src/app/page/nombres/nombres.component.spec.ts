import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombresComponent } from './nombres.component';

describe('NombresComponent', () => {
  let component: NombresComponent;
  let fixture: ComponentFixture<NombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
