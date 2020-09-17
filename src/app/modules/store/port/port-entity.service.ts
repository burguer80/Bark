import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Port} from '../../shared/models/port.model';

@Injectable({
    providedIn: 'root'
})
export class PortEntityService extends EntityCollectionServiceBase<Port> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Port', serviceElementFactory);
    }
}
