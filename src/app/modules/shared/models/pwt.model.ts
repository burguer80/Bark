import {PortLane} from './port-lane.model';
import {PwtData} from './pwt-data.model';

export interface Pwt {
    id: number;
    lanes: {
        commercial?: PortLane;
        pedestrian?: PortLane;
        private?: PortLane;
    };
    details: {
        name: string;
        hours: string;
        opens_at: number;
        closed_at: number;
        border_name: string;
        crossing_name: string;
    };
    hours: string;
    last_update_time: string;
    port_time: string;


    data: {
        commercial: PwtData[],
        pedestrian: PwtData[],
        private: PwtData[],
    };
    created_at: string;
    updated_at: string;
}
