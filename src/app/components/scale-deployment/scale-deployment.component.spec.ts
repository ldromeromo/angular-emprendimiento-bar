import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaledeploymentComponent } from './scale-deployment.component';

describe('MainComponent', () => {
  let component: ScaledeploymentComponent;
  let fixture: ComponentFixture<ScaledeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaledeploymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScaledeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
