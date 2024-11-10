export interface ConfigInjectionResponse {
    id: number,
    number_leads: number,
    number_assesor: number,
    is_active: boolean,
    update_by: string,
    update_at: string,
    id_campania: number,
    name_campania: string
}

export interface ConfigInjectionUpdate {
    id: number,
    number_leads: number,
    number_assesor: number,
    is_active: boolean,
    update_by: string,
    update_at: string,
}

export interface ConfigInjectionRequest {    
    number_leads: number,
    number_assesor: number,
    is_active: boolean,
    update_by: string,    
    id_campania: number,    
}