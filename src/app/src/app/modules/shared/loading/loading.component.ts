import {Component, OnInit} from '@angular/core';
import {PortEntityService} from '../../../../../modules/store/port/port-entity.service';
import {PwtEntityService} from '../../../../../modules/store/pwt/pwt-entity.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

    constructor(
        public portFacade: PortEntityService,
        public pwtFacade: PwtEntityService,
    ) {
    }

    ngOnInit() {
    }

}
