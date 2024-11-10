export interface DbUpdateRequest {
    interval: number,
    update_by: string
}

export interface DbUpdateResponse {
    id: number,
    interval: number,
    update_at: string,
    update_by: string,
    last_run: string
}

export interface DbUpdateUpdate {    
    interval: number,
    update_at: string,
    update_by: string,
    last_run: string
}
