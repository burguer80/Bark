import {Component, Input, OnInit} from '@angular/core';

import {Port} from '../../../shared/models/port.model';
import {Pwt} from '../../../shared/models/pwt.model';
import {PwtEntityService} from '../../../store/pwt/pwt-entity.service';

@Component({
    selector: 'app-pwt',
    templateUrl: './pwt.component.html',
    styleUrls: ['./pwt.component.scss'],
})
export class PwtComponent implements OnInit {
    @Input() port: Port;
    @Input() pwt: Pwt;

    constructor(public pwtFacade: PwtEntityService) {
    }

    ngOnInit() {
    }

}

// TODO: convert minutes into readable format
// TODO: apply ngclass to call method in order to show display the proper color red/green
// TODO: add moment js to display ago time.
// TODO: define what is the best option to get the latest wait time 1. crazy map vs 2. endpoint
