import {Component, OnInit} from '@angular/core';
import {PortEntityService} from '../../store/port/port-entity.service';
import {PwtEntityService} from '../../store/pwt/pwt-entity.service';
import {Observable} from 'rxjs';
import {Pwt} from '../../shared/models/pwt.model';
import {ModalController} from '@ionic/angular';
import {PortsPage} from '../ports/ports.page';

@Component({
    selector: 'app-pwt-list',
    templateUrl: './pwt-list.page.html',
    styleUrls: ['./pwt-list.page.scss'],
})
export class PwtListPage implements OnInit {
    public pwts$: Observable<Pwt[]> = this.pwtFacade.entities$;

    constructor(
        private portFacade: PortEntityService,
        private pwtFacade: PwtEntityService,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
    }

    async openPorts() {
        const modal = await this.modalController.create({
            component: PortsPage,
            componentProps: {
                modalCalled: true
            }
        });
        return await modal.present();
    }
}
