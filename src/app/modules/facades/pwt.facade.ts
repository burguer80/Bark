import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {Pwt} from '../shared/models/pwt.model';
import {LaneTypes} from '../shared/enums/lane-types.enum';
import {PwtService} from '../shared/services/pwt.service';


@Injectable({
    providedIn: 'root'
})
export class PwtFacade {
    private isLoadingSource = new BehaviorSubject<boolean>(false);
    public loading$ = this.isLoadingSource.asObservable(); // TODO: pending
    private loadedSource = new BehaviorSubject<boolean>(false);
    public loaded$ = this.loadedSource.asObservable(); // TODO: pending
    private pwtSource = new BehaviorSubject<Pwt[]>([]);
    public all: Observable<Pwt[]> = this.pwtSource.asObservable();
    private selectedLaneSource = new BehaviorSubject<LaneTypes>(LaneTypes.Private);
    public selectedLane = this.selectedLaneSource.asObservable();


    constructor(
        private http: HttpClient,
        private pwtService: PwtService
    ) {
    }

    public delete(id: string | number): void {
        this.removeById(id);
    }

    public getFirstOrLoadPwt(id: string | number): Observable<Pwt> {
        return this.getFirstPwt(id).pipe(
            filter(pwt => !pwt),
            tap(() => this.isLoadingSource.next(true)),
            switchMap(() => this.pwtService.getByKey(id)),
            tap((pwt) => this.pwtSource.next(this.pwtSource.getValue().concat([pwt]))),
            tap(() => this.loadedSource.next(true)),
            tap(() => this.isLoadingSource.next(false)),
        );
    }

    public getFirstPwt(id: string | number): Observable<Pwt> {
        return this.all.pipe(
            map(portWaitTimes => portWaitTimes.find((pwt: Pwt) => pwt.id === id)),
        );
    }

    public pwtLoaded(id: string | number): Observable<boolean> {
        return this.getFirstPwt(id).pipe(
            map((pwt: Pwt) => !!pwt)
        );
    }

    public selectLane(lane: LaneTypes): void {
        this.selectedLaneSource.next(lane);
    }

    private removeById(id: string | number): void {
        const pwtList: Pwt[] = this.pwtSource.getValue();
        const matchIndex: string | number = pwtList.findIndex((pwt) => {
            return pwt.id === id;
        });
        if (matchIndex >= 0) {
            pwtList.splice(matchIndex, 1);
        }
        this.pwtSource.next(pwtList);
    }
}
