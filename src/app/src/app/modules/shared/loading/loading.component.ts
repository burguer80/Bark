import {Component, OnInit} from '@angular/core';
import {PwtEntityService} from '../../../../../modules/store/pwt/pwt-entity.service';
import {PortFacade} from '../../../../../modules/facades/port.facade';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

    constructor(
        public portFacade: PortFacade,
        public pwtFacade: PwtEntityService,
    ) {
    }

    ngOnInit() {
    }

}
