import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PortEntityService} from '../modules/store/port/port-entity.service';
import {PwtEntityService} from '../modules/store/pwt/pwt-entity.service';
import {map} from 'rxjs/operators';
import {Pwt} from '../modules/shared/models/pwt.model';
import {Observable, Subject} from 'rxjs';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, OnDestroy {
    public folder: string;
    public pwts: Observable<Pwt[]> = this.pwtFacade.entities$;
    public pwt$: Observable<Pwt>;
    private unsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private activatedRoute: ActivatedRoute,
        private portFacade: PortEntityService,
        private pwtFacade: PwtEntityService
    ) {
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(this.folder);

        this.pwt$ = this.pwtFacade.getFirstOrLoadPwt(this.folder);
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

}
