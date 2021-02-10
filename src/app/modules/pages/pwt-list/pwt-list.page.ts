import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PortsPage} from '../ports/ports.page';
import {LaneTypes} from '../../shared/enums/lane-types.enum';
import {PortFacade} from '../../facades/port.facade';
import {PwtFacade} from '../../facades/pwt.facade';

@Component({
    selector: 'app-pwt-list',
    templateUrl: './pwt-list.page.html',
    styleUrls: ['./pwt-list.page.scss'],
})
export class PwtListPage implements OnInit {
    public laneTypes = LaneTypes;

    constructor(
        public portFacade: PortFacade,
        public pwtFacade: PwtFacade,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
    }

    public async openPorts(): Promise<void> {
        const modal = await this.modalController.create({
            component: PortsPage,
            componentProps: {
                modalCalled: true
            },
            swipeToClose: true,
        });
        return await modal.present();
    }
}
