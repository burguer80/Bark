import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Observable, of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';

import {Port} from '../../shared/models/port.model';
import {PortListRow} from '../../shared/models/port-list-row.model';

@Injectable({
    providedIn: 'root'
})
export class PortEntityService extends EntityCollectionServiceBase<Port> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Port', serviceElementFactory);
    }

    public get portListRows$(): Observable<PortListRow[]> {
        return this.filteredEntities$.pipe(
            switchMap(ports => {
                const portNames = ports.map(port => port.details.name);
                const uniquePortNames = portNames.filter((value, index, self) => self.indexOf(value) === index).sort();
                const portsListRows: PortListRow[] = [];
                uniquePortNames.forEach(name => {
                    const portListRow: PortListRow = this.getPortDataRow(ports, name);
                    portsListRows.push(portListRow);
                });
                return of(portsListRows);
            }),
        );
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

    private getPortDataRow(ports: Port[], name: string): PortListRow {
        const crossings: Port[] = ports.filter(port => port.details.name === name);
        return {
            name,
            crossings
        };
    }
}
