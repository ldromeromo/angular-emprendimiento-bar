import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalestatefulComponent } from './scale-stateful.component';

describe('MainComponent', () => {
  let component: ScalestatefulComponent;
  let fixture: ComponentFixture<ScalestatefulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScalestatefulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScalestatefulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
