import {Component, OnInit} from '@angular/core';
import {PortFacade} from '../../../../../modules/facades/port.facade';
import {PwtFacade} from '../../../../../modules/facades/pwt.facade';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

    constructor(
        public portFacade: PortFacade,
        public pwtFacade: PwtFacade,
    ) {
    }

    ngOnInit() {
    }

}
