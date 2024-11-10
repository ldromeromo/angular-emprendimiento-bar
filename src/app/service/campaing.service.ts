import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CampaignRequest, CampaignResponse } from '../api/campaing';

@Injectable({
  providedIn: 'root'
})
export class CampaingService {

  private endpoint = `${environment.apiUrl}/campaing`

  constructor(private http: HttpClient) { }

  async getCampaings(): Promise<CampaignResponse[]>{
    try {
      const response = await firstValueFrom(this.http.get<CampaignResponse[]>(`${this.endpoint}`));
      return response;
    } catch (error) {
      console.error('Error al obtener las Campañas:', error);
      throw error;
    }
  }

  async getCampaingById(id: number): Promise<CampaignResponse[]>{
    try {
      const response = await firstValueFrom(this.http.get<CampaignResponse[]>(`${this.endpoint}/${id}`));
      return response;
    } catch (error) {
      console.error('Error al obtener la Campaña:', error);
      throw error;
    }
  }

  async addNewCampaing(bodyData: CampaignRequest): Promise<CampaignRequest[]>{
    try {
      const response = await firstValueFrom(this.http.post<CampaignRequest[]>(`${this.endpoint}`, bodyData));
      return response;
    } catch (error) {
      console.error('Error al agregar nueva Campaña:', error);
      throw error;
    }
  }

  async deleteCampaing(id: number): Promise<string>{
    try {
      const response = await firstValueFrom(this.http.delete<string>(`${this.endpoint}/${id}`));
      return response;
    } catch (error) {
      console.error('Error al eliminar la Campaña:', error);
      throw error;
    }
  }

  
}
