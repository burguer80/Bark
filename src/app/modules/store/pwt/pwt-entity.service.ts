import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

import {Pwt} from '../../shared/models/pwt.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {LaneTypes} from '../../shared/enums/lane-types.enum';

@Injectable({
    providedIn: 'root'
})
export class PwtEntityService extends EntityCollectionServiceBase<Pwt> {
    private selectedLaneSource = new BehaviorSubject<LaneTypes>(LaneTypes.Private);
    selectedLane = this.selectedLaneSource.asObservable();

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Pwt', serviceElementsFactory);
    }

    public getFirstOrLoadPwt(id: string | number): Observable<Pwt> {
        return this.getFirstPwt(id).pipe(
            tap(pwt => {
                if (!pwt) {
                    this.getByKey(id);
                }
            }),
        );
    }

    public getFirstPwt(id: string | number): Observable<Pwt> {
        return this.filteredEntities$.pipe(
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
}
