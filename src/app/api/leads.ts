export interface ReadLead {
    id: number;
    movil_number: string;
    microsegment: string;
    channel: string;
    lead_type: string;
    medium: string;
    landing_name: string;
    landing_id: number;
    product: string;
    counter: number;
    priority: boolean;
    id_campania: number;
    last_call: string; 
    name_campania: string;
}

export interface WriteLead {    
    movil_number: string;
    microsegment: string;
    channel: string;
    lead_type: string;
    medium: string;
    landing_name: string;
    landing_id: number;
    product: string;
    counter: number;
    priority: boolean;
    id_campania: number;
}

export interface ReadLeadById {
    id: number;
    movil_number: string;
    microsegment: string;
    channel: string;
    lead_type: string;
    medium: string;
    landing_name: string;
    landing_id: number;
    product: string;
    counter: number;
    priority: boolean;
    id_campania: number;
    last_call: string;     
}

export interface ReadLeadsById {
    id: number;
    movil_number: string;
    microsegment: string;
    channel: string;
    lead_type: string;
    medium: string;
    landing_name: string;
    landing_id: number;
    product: string;
    counter: number;
    priority: boolean;
    id_campania: number;
    last_call: string;     
    name_campania: string;
}

export type UpdateLeadsIntent = number;

export interface UpdateLeadRegistry {
    id: number;
    movil_number: string;
    microsegment: string;
    channel: string;
    lead_type: string;
    medium: string;
    landing_name: string;
    landing_id: number;
    product: string;
    counter: number;
    priority: boolean;
    id_campania: number;
}

export interface CountResponse {
    leads_count: number
    historical_leads_count: number
    filteread_leads_count: number
}