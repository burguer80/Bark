import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {take, tap} from 'rxjs/operators';


import {ModalController} from '@ionic/angular';
import {PwtEntityService} from '../../store/pwt/pwt-entity.service';
import {Port} from '../../shared/models/port.model';
import {PortEntityService} from '../../store/port/port-entity.service';
import {PortListRow} from '../../shared/models/port-list-row.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-ports',
    templateUrl: './ports.page.html',
    styleUrls: ['./ports.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class PortsPage implements OnInit {
    @Input() modalCalled: false;
    public portsListRows$: Observable<PortListRow[]> = this.portFacade.portListRows$;
    public filterText = '';

    constructor(
        public modalController: ModalController,
        private portFacade: PortEntityService,
        public pwtFacade: PwtEntityService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    public async dismissModal() {
        return this.modalCalled ? this.modalController.dismiss() :  this.router.navigate(['/pwt-list']);
        // return this.modalController.dismiss();
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
