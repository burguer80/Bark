import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {Port} from '../../shared/models/port.model';

@Injectable({
    providedIn: 'root'
})
export class PortEntityService extends EntityCollectionServiceBase<Port> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Port', serviceElementFactory);
    }

    public getFirstOrLoadPorts(id: string | number): Observable<Port> {
        return this.filteredEntities$.pipe(
            map(ports => ports.find((port: Port) => port.number === id)),
            tap(ports => {
                if (!ports) {
                    this.loadPorts();
                }
            }),
        );
    }

    public loadPorts(): void {
        this.getAll();
    }
}
