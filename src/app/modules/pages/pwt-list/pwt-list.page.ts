import {Component, OnInit} from '@angular/core';
import {PortEntityService} from '../../store/port/port-entity.service';
import {PwtEntityService} from '../../store/pwt/pwt-entity.service';
import {Observable} from 'rxjs';
import {Pwt} from '../../shared/models/pwt.model';

@Component({
    selector: 'app-pwt-list',
    templateUrl: './pwt-list.page.html',
    styleUrls: ['./pwt-list.page.scss'],
})
export class PwtListPage implements OnInit {
    public pwts$: Observable<Pwt[]> = this.pwtFacade.entities$;

    constructor(
        private portFacade: PortEntityService,
        private pwtFacade: PwtEntityService
    ) {
    }

    ngOnInit() {
    }

}
