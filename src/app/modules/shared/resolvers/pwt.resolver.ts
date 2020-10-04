import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';

import {PwtEntityService} from '../../store/pwt/pwt-entity.service';

@Injectable()
export class PwtResolver implements Resolve<boolean> {
    constructor(
        private pwtFacade: PwtEntityService,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const portId: string = route.paramMap.get('id');

        return this.pwtFacade.pwtLoaded(portId)
            .pipe(
                tap((loaded) => {
                    if (!loaded) {
                        this.pwtFacade.getByKey(portId);
                    }
                }),
                filter(loaded => !!loaded),
                take(1)
            );
    }
}
