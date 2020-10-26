import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';

import {Port} from '../../../shared/models/port.model';
import {Pwt} from '../../../shared/models/pwt.model';
import {PwtEntityService} from '../../../store/pwt/pwt-entity.service';
import {PortLane} from '../../../shared/models/port-lane.model';

@Component({
    selector: 'app-pwt',
    templateUrl: './pwt.component.html',
    styleUrls: ['./pwt.component.scss'],
})
export class PwtComponent implements OnInit {
    @Input() port: Port;
    @Input() pwt: Pwt;
    @Input() state: string;

    constructor(public pwtFacade: PwtEntityService) {
    }

    ngOnInit() {
        console.log(this.pwt.last_update_time);
    }

    public get selectedLane(): PortLane {
        let selectedLane: PortLane = {};
        switch (this.state) {
            case 'commercial': {
                selectedLane = this.pwt.lanes?.commercial;
                break;
            }
            case 'pedestrian': {
                selectedLane = this.pwt.lanes?.pedestrian;
                break;
            }
            default: {
                selectedLane = this.pwt.lanes?.private;
                break;
            }
        }
        return selectedLane;
    }

    public get hasLastUpdateTime(): boolean {
        return !!this.pwt.last_update_time;
    }

    public get updatedTimeAgo(): string {
        const timestamp = Date.parse(this.pwt.last_update_time);
        const timeFormatted = new Date(timestamp);
        return this.hasLastUpdateTime ? moment(timeFormatted).fromNow() : '';
    }

    public minutesToHours(minutes: string): string {
        return !!minutes ? moment.duration(minutes, 'minutes').format('h[h] m[m]') : '-';
    }

}

// TODO: convert minutes into readable format
// TODO: apply ngclass to call method in order to show display the proper color red/green
// TODO: add moment js to display ago time.
// TODO: define what is the best option to get the latest wait time 1. crazy map vs 2. endpoint
