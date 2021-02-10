import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LaneTypes} from './modules/shared/enums/lane-types.enum';
import {PwtFacade} from './modules/facades/pwt.facade';
import {PortFacade} from './modules/facades/port.facade';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public laneTypes = LaneTypes;

    constructor(
        private platform: Platform,
        public pwtFacade: PwtFacade,
        public portFacade: PortFacade,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        this.portFacade.getAll();
    }

    public selectLane(lane: LaneTypes): void {
        this.pwtFacade.selectLane(lane);
    }
}
