import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';


import {PwtEntityService} from '../../store/pwt/pwt-entity.service';
import {Port} from '../../shared/models/port.model';
import {PortEntityService} from '../../store/port/port-entity.service';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-ports',
    templateUrl: './ports.page.html',
    styleUrls: ['./ports.page.scss'],
})
export class PortsPage implements OnInit {
    public ports$: Observable<Port[]> = this.portFacade.entities$;

    constructor(
        private portFacade: PortEntityService,
        private pwtFacade: PwtEntityService
    ) {
    }

    ngOnInit() {
    }

    getPwt(portId): void {
        console.log(portId);
        this.pwtFacade.getFirstOrLoadPwt(portId).pipe(
            first()
        ).subscribe();
    }

}
