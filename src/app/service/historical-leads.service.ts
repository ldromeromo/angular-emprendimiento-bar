import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateHistoricalLeads, ReadHistoricalLeads } from '../api/historical-leads';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoricalLeadsService {

  private endpoint = `${environment.url_api}`

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint + "/productos");
  }

  getPrecios(): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint + "/precios");
  }

  getInventarioCompleto(): Observable<any[]> {
    return forkJoin([this.getProductos(), this.getPrecios()]).pipe(
      map(([productos, precios]) => {
        return productos.map(producto => {
          const precio = precios.find(p => p.id_producto === producto.id_producto);
          return {
            ...producto,
            precio: precio ? precio.precioxunidad : null
          };
        });
      })
    );
  }
}