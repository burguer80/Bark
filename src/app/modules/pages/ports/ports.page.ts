import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {take, tap} from 'rxjs/operators';


import {ModalController} from '@ionic/angular';
import {PwtEntityService} from '../../store/pwt/pwt-entity.service';
import {Port} from '../../shared/models/port.model';
import {PortEntityService} from '../../store/port/port-entity.service';
import {PortListRow} from '../../shared/models/port-list-row.model';

@Component({
    selector: 'app-ports',
    templateUrl: './ports.page.html',
    styleUrls: ['./ports.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class PortsPage implements OnInit {
    public portsListRows$: Observable<PortListRow[]> = this.portFacade.portListRows$;
    public filterText = '';

    constructor(
        public modalController: ModalController,
        private portFacade: PortEntityService,
        public pwtFacade: PwtEntityService,
    ) {
    }

    ngOnInit() {
    }

    public async dismissModal() {
        return this.modalController.dismiss();
    }

    public onChange(event: CustomEvent, port: Port): void {
        if (event.detail.checked) {
            this.pwtFacade.getFirstOrLoadPwt(port.id).pipe(
                take(1)
            ).subscribe();
        } else {
            this.pwtFacade.getFirstPwt(port.id).pipe(
                take(1),
                tap((pwt) => this.pwtFacade.delete(pwt.id))
            ).subscribe();
        }
    }

    public onSearchChange($event): void {
        this.filterText = $event.detail.value;
    }
}
