import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, first, map, take, tap} from 'rxjs/operators';

import {PortEntityService} from '../../store/port/port-entity.service';
import {PwtEntityService} from '../../store/pwt/pwt-entity.service';
import {Pwt} from '../models/pwt.model';


@Injectable()
export class PortResolver implements Resolve<boolean> {
    constructor(
        private portFacade: PortEntityService,
        private pwtFacade: PwtEntityService,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const portId: string = route.paramMap.get('id');
        this.pwtFacade.filteredEntities$.pipe(
            map(portWaitTimes => portWaitTimes.find((pwt: Pwt) => pwt.port_number === portId)),
            tap(pwt => {
                if (!pwt) {
                    this.pwtFacade.getByKey(portId);
                }
            }),
            filter(pwt => !!pwt),
            take(1),
        ).subscribe();

        return this.portFacade.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.portFacade.getAll();
                    } else {
                    }
                }),
                filter(loaded => !!loaded),
                first(),
            );
    }
}
