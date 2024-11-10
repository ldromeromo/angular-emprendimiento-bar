import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConfigInjectionRequest, ConfigInjectionResponse, ConfigInjectionUpdate } from '../api/config-injection';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigInjectionService {

  private endpoint = `${environment.apiUrl}/config-injection`

  constructor(private http: HttpClient) { }

  async readConfigInjection(): Promise<ConfigInjectionResponse[]> {
    try {
      const response = await firstValueFrom(this.http.get<ConfigInjectionResponse[]>(`${this.endpoint}`));
      return response;
    } catch (error) {
      console.log('Error al obtener la configuración de las inyecciones:', error);
      throw error;
    }
  }

  async updateConfigInjection(bodyData: ConfigInjectionUpdate): Promise<ConfigInjectionUpdate[]>{
    try {
      const response = await firstValueFrom(this.http.put<ConfigInjectionUpdate[]>(`${this.endpoint}`, bodyData));
      return response;
    } catch (error) {
      console.log('Error al actualizar la configuración de las inyecciones:', error);
      throw error;
    }
  }

  async createConfigInjection(bodyData: ConfigInjectionRequest): Promise<ConfigInjectionRequest[]>{
    try {
      const response = await firstValueFrom(this.http.post<ConfigInjectionRequest[]>(`${this.endpoint}`, bodyData));
      return response;
    } catch (error) {
      console.log('Error al crear la configuración de las inyecciones:', error);
      throw error;
    }
  }

  async deleteConfigInjection(id: number): Promise<string>{
    try {
      const response = await firstValueFrom(this.http.delete<string>(`${this.endpoint}/${id}`));
      return response;
    } catch (error) {
      console.log('Error al eliminar la configuración de las inyecciones:', error);
      throw error;
    }
  }
}
