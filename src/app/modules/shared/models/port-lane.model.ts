import {TimeSlot} from './time-slot.model';

export interface PortLane {
    fast?: TimeSlot;
    standard?: TimeSlot;
    ready?: TimeSlot;
}
