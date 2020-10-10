import {PwtData} from './pwt-data.model';

export interface Pwt {
    id: number;
    data: {
        commercial: PwtData[],
        pedestrian: PwtData[],
        private: PwtData[],
    };
    created_at: string;
    updated_at: string;
}
