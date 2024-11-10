export interface ReadHistoricalLeads {
    id: number,
    movil_number: string,
    id_campania: number,
    name_campania: string,
    medium: string,
    counter: number,
    created_at: string
}

export interface CreateHistoricalLeads {    
    movil_number: string,
    id_campania: number,    
    medium: string,
    counter: number,    
}
