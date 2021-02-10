import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, first, tap} from 'rxjs/operators';

import {PortFacade} from '../../facades/port.facade';

@Injectable()
export class PortResolver implements Resolve<boolean> {
    constructor(
        private portFacade: PortFacade,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.portFacade.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.portFacade.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first(),
            );
    }
}
