import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalsLeadsComponent } from './historicals-leads.component';

describe('HistoricalsLeadsComponent', () => {
  let component: HistoricalsLeadsComponent;
  let fixture: ComponentFixture<HistoricalsLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalsLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricalsLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
