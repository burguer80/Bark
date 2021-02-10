import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';

import {PwtFacade} from '../../facades/pwt.facade';

@Injectable()
export class PwtResolver implements Resolve<boolean> {
    constructor(
        private pwtFacade: PwtFacade,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const portId: string = route.paramMap.get('id');

        return this.pwtFacade.pwtLoaded(portId)
            .pipe(
                tap((loaded) => {
                    if (!loaded) {
                        this.pwtFacade.getFirstOrLoadPwt(portId);
                    }
                }),
                filter(loaded => !!loaded),
                take(1)
            );
    }
}
