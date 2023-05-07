export interface Turno {
    id: number, 
    completed: boolean,
    date: string,
    timeType: 'MAÑANA' | 'TARDE',
    start_time: string,
    end_time: string
};