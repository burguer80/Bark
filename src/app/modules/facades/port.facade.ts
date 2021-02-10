import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import * as LocalizedStrings from '../shared/consts/localized-strins.const';
import {Port} from '../shared/models/port.model';
import {PortService} from '../shared/services/port.service';
import {catchError, finalize, map, switchMap, take, tap} from 'rxjs/operators';
import {PortListRow} from '../shared/models/port-list-row.model';


@Injectable({
    providedIn: 'root'
})
export class PortFacade {
    private isLoadingSource = new BehaviorSubject<boolean>(false);
    public isLoading = this.isLoadingSource.asObservable(); // TODO: pending
    private loadedSource = new BehaviorSubject<boolean>(false);
    public loaded = this.loadedSource.asObservable(); // TODO: pending
    private portsSource = new BehaviorSubject<Port[]>([]);
    public all: Observable<Port[]> = this.portsSource.asObservable();

    constructor(
        private http: HttpClient,
        private portService: PortService
    ) {
    }

    public get portListRows$(): Observable<PortListRow[]> {
        return this.all.pipe(
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
        return this.all.pipe(
            map(ports => ports.find((port: Port) => port.id === id)),
            tap(ports => {
                if (!ports) {
                    this.getAll();
                }
            }),
        );
    }

    public getAll(): void {
        this.isLoadingSource.next(true);
        this.portService.getAll().pipe(
            take(1),
            tap((ports) => this.portsSource.next(ports)),
            catchError(async () => console.error(LocalizedStrings.errorGeneric)),
            finalize(() => this.isLoadingSource.next(false))
        ).subscribe();

        // this.http.get<Port[]>(`${environment.herokuBackend}/ports`).subscribe((ports: Port[]) => {
        //         this.portsSource.next(ports);
        //     },
        //     error => {
        //         this.isLoadingSource.next(false);
        //         console.error(LocalizedStrings.errorGeneric);
        //     },
        //     () => {
        //         this.isLoadingSource.next(false);
        //     });
        //    TODO: Add Error Handler Subject
    }

    private getPortDataRow(ports: Port[], name: string): PortListRow {
        const crossings: Port[] = ports.filter(port => port.details.name === name);
        return {
            name,
            crossings
        };
    }
}
