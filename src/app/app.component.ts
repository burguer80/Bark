import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {PwtEntityService} from './modules/store/pwt/pwt-entity.service';
import {LaneTypes} from './modules/shared/enums/lane-types.enum';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public appPages = [
        {
            title: 'My Port Wait Times',
            url: '/pwt-list',
            icon: 'heart'
        },
        {
            title: 'Ports',
            url: '/ports',
            icon: 'heart'
        }
    ];
    public laneTypes = LaneTypes;
    public labels = ['Favorites'];
    public selectedIndex = 0;

    constructor(
        private platform: Platform,
        public pwtFacade: PwtEntityService,
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
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
        this.selectLane(this.laneTypes.Private);
    }

    public selectLane(lane: LaneTypes): void {
        this.pwtFacade.selectLane(lane);
    }
}
