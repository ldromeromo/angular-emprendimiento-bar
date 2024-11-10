import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReadLead, ReadLeadById, ReadLeadsById, UpdateLeadRegistry, UpdateLeadsIntent, WriteLead, CountResponse } from '../api/leads';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  private endpoint = `${environment.url_api}/lead`

  constructor(private http: HttpClient) { }

  async readLeads(): Promise<ReadLead[]>{
    try {
      const response = await firstValueFrom(this.http.get<ReadLead[]>(`${this.endpoint}`));
      return response;
    } catch (error) {
      console.log('Error al obtener leads:', error);
      throw error;
    }
  }

  async countLeads(): Promise<CountResponse>{
    try {
      const response = await firstValueFrom(this.http.get<CountResponse>(`${this.endpoint}/count`));
      return response
    } catch (error) {
      console.log('Error al obtener data:', error)
      throw error;
    }
  }

  async writeLeads(bodyData: WriteLead): Promise<WriteLead[]>{
    try {
      const response = await firstValueFrom(this.http.post<WriteLead[]>(`${this.endpoint}`, bodyData));
      return response;
    } catch (error) {
      console.log('Error al crear leads:', error);
      throw error;
    }
  }

  async deleteLead(id: number): Promise<string>{
    try {
      const response = await firstValueFrom(this.http.delete<string>(`${this.endpoint}/${id}`));
      return response;
    } catch (error) {
      console.log('Error al eliminar leads:', error);
      throw error;
    }
  }

  async readLeadById(id: number): Promise<ReadLeadById[]>{
    try {
      const response = await firstValueFrom(this.http.get<ReadLeadById[]>(`${this.endpoint}/${id}`));
      return response;
    } catch (error) {
      console.log('Error al obtener lead por Id:', error);
      throw error;
    }
  }

  async readLeadsById(id: number): Promise<ReadLeadsById[]>{
    try {
      const response = await firstValueFrom(this.http.get<ReadLeadsById[]>(`${this.endpoint}/campania/${id}`));
      return response;
    } catch (error) {
      console.log('Error al obtener lead por Id:', error);
      throw error;
    }
  }

  async updateLeadsIntent(bodyData: UpdateLeadsIntent): Promise<UpdateLeadsIntent[]>{
    try {
      const response = await firstValueFrom(this.http.put<UpdateLeadsIntent[]>(`${this.endpoint}/intent`, bodyData));
      return response;
    } catch (error) {
      console.log('Error al actualizar intentos:', error);
      throw error;
    }
  }

  async updateLeadsRegistry(bodyData: UpdateLeadRegistry): Promise<UpdateLeadRegistry[]>{
    try {
      const response = await firstValueFrom(this.http.put<UpdateLeadRegistry[]>(`${this.endpoint}/registry`, bodyData));
      return response;
    } catch (error) {
      console.log('Error al actualizar registro:', error);
      throw error;
    }
  }
}
