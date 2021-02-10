import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {take, tap} from 'rxjs/operators';

import {ModalController} from '@ionic/angular';
import {PwtEntityService} from '../../store/pwt/pwt-entity.service';
import {Port} from '../../shared/models/port.model';
import {Router} from '@angular/router';
import {PortFacade} from '../../facades/port.facade';

@Component({
    selector: 'app-ports',
    templateUrl: './ports.page.html',
    styleUrls: ['./ports.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class PortsPage implements OnInit {
    @Input() modalCalled: false;
    public filterText = '';

    constructor(
        public modalController: ModalController,
        public portFacade: PortFacade,
        public pwtFacade: PwtEntityService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.portFacade.getAll();
    }

    public async dismissModal() {
        return this.modalCalled ? this.modalController.dismiss() : this.navigateToPwtListPage();
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

    private navigateToPwtListPage() {
        return this.router.navigate(['/pwt-list']);
    }
}
