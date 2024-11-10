import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DbUpdateRequest, DbUpdateResponse, DbUpdateUpdate } from '../api/config-db-update';

@Injectable({
  providedIn: 'root'
})
export class DbUpdateService {

  private endpoint = `${environment.apiUrl}/config-db`

  constructor(private http: HttpClient) { }

  async viewConfigDb(): Promise<DbUpdateResponse>{
    try {
      const response = await firstValueFrom(this.http.get<DbUpdateResponse>(`${this.endpoint}`));
      return response;
    } catch (error) {
      console.log('Error al obtener la configuración de la bd:', error);
      throw error;
    }
  }

  async setConfigDb(bodyData: DbUpdateRequest): Promise<DbUpdateRequest[]>{
    try {
      const response = await firstValueFrom(this.http.post<DbUpdateRequest[]>(`${this.endpoint}`, bodyData));
      return response;
    } catch (error) {
      console.log('Error al craar la configuración de la bd:', error);
      throw error;
    }
  }

  async updateConfigDb(bodyData: DbUpdateUpdate): Promise<DbUpdateUpdate[]>{
    try {
      const response = await firstValueFrom(this.http.put<DbUpdateUpdate[]>(`${this.endpoint}`, bodyData));
      return response;
    } catch (error) {
      console.log('Error al actualizar la configuración de la bd:', error);
      throw error;
    }
  }

  async deleteConfigDb(): Promise<string>{
    try {
      const response = await firstValueFrom(this.http.delete<string>(`${this.endpoint}`));
      return response;
    } catch (error) {
      console.log('Error al eliminar la configuración de la bd:', error);
      throw error;
    }
  }
}
