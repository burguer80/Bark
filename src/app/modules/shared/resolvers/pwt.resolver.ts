import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, first} from 'rxjs/operators';

import {PwtEntityService} from '../../store/pwt/pwt-entity.service';

@Injectable()
export class PwtResolver implements Resolve<boolean> {
    constructor(
        private pwtFacade: PwtEntityService,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const portId: string = route.paramMap.get('id');

        return this.pwtFacade.pwtLoaded$(portId)
            .pipe(
                filter(loaded => !!loaded),
                first(),
            );
    }
}
