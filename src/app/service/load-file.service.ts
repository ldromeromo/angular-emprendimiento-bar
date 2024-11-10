import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadFile } from '../api/load-file';

@Injectable({
  providedIn: 'root'
})
export class LoadFileService {

  private endpoint = `${environment.apiUrl}/upload`

  constructor(private http: HttpClient) { }

  async loadFile(file: File): Promise<any>{
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    try {
      const response = await firstValueFrom(this.http.post<any>(`${this.endpoint}`, formData));
      return response;
    } catch (error) {
      console.error('Error al cargar documento:', error);
      throw error;
    }
  }

  async leadSummary(): Promise<any>{
    try{
      const response = await firstValueFrom(this.http.get<any>(`${environment.apiUrl}/filtered-leads`));
      return response;
    } catch (error){
      console.log('Error al obtener el total de leads:', error);
      throw error;
    }
  }
}
