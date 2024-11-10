import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReadHistoricalLeads } from 'src/app/api/historical-leads';
import { HistoricalLeadsService } from 'src/app/service/historical-leads.service';
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-historicals-leads',
  templateUrl: './historicals-leads.component.html',
  styleUrl: './historicals-leads.component.scss'
})
export class HistoricalsLeadsComponent implements OnInit, OnDestroy  {
  historicalLeads: any[] = [];
  intervalSubscription: Subscription | null = null;

  constructor(
    private inventarioService: HistoricalLeadsService
  ){}
   
  ngOnInit(): void {
    // Inicia el proceso de actualización periódica de datos y hora
    this.intervalSubscription = interval(5000) 
      .pipe(
        switchMap(() => this.inventarioService.getInventarioCompleto())
      )
      .subscribe(data => {
        this.historicalLeads = data.map(item => ({
          ...item,
          created_at: new Date()
        }));
      });
  }

  ngOnDestroy(): void {
    // Detiene el intervalo cuando se sale del componente
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
