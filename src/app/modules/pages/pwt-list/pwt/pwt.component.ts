import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';

import {Port} from '../../../shared/models/port.model';
import {Pwt} from '../../../shared/models/pwt.model';
import {PwtEntityService} from '../../../store/pwt/pwt-entity.service';
import {PortLane} from '../../../shared/models/port-lane.model';
import {LaneTypes} from '../../../shared/enums/lane-types.enum';

@Component({
    selector: 'app-pwt',
    templateUrl: './pwt.component.html',
    styleUrls: ['./pwt.component.scss'],
})
export class PwtComponent implements OnInit {
    @Input() port: Port;
    @Input() pwt: Pwt;
    @Input() state: LaneTypes;
    public laneTypes = LaneTypes;

    constructor(public pwtFacade: PwtEntityService) {
    }

    ngOnInit() {
        console.log(this.pwt.last_update_time);
    }

    public get selectedLane(): PortLane {
        let selectedLane: PortLane = {};
        switch (this.state) {
            case this.laneTypes.Commercial: {
                selectedLane = this.pwt.lanes?.commercial;
                break;
            }
            case this.laneTypes.Pedestrian: {
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
        if (!minutes) {
            return '-';
        }

        const minsNumber = Number(minutes);

        if (minsNumber < 60) {
            return `${minutes}m`;
        }

        if (minsNumber === 60) {
            return moment.duration(minutes, 'minutes').format('h[h]');
        }

        if (minsNumber > 60) {
            return moment.duration(minutes, 'minutes').format('h[h] m[m]');
        }
    }

}

// TODO: extract momentjs logic to a service
// TODO: this code must be refactored is super ugly
