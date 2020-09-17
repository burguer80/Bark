import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

import {Pwt} from '../../shared/models/pwt.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PwtEntityService extends EntityCollectionServiceBase<Pwt> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Pwt', serviceElementsFactory);
    }

    getOrLoadPwt(id: string | number): Observable<Pwt> {
        return this.getByKey(id);
    }
}
