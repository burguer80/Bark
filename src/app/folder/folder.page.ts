import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {Port} from '../modules/shared/models/port.model';
import {PortEntityService} from '../modules/store/port/port-entity.service';
import {PwtEntityService} from '../modules/store/pwt/pwt-entity.service';
import {Pwt} from '../modules/shared/models/pwt.model';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
    public folder: string;
    public pwts: Observable<Pwt[]> = this.pwtFacade.entities$;
    public port$: Observable<Port>;
    public pwt$: Observable<Pwt>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private portFacade: PortEntityService,
        private pwtFacade: PwtEntityService
    ) {
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');

        this.pwt$ = this.pwtFacade.getFirstOrLoadPwt(this.folder);
        this.port$ = this.portFacade.getFirstOrLoadPorts(this.folder);
    }
}
