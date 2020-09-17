import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, first, tap} from 'rxjs/operators';

import {PortEntityService} from '../../store/port/port-entity.service';

@Injectable()
export class PortResolver implements Resolve<boolean> {
    constructor(
        private portFacade: PortEntityService,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

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
