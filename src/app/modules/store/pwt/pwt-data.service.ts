import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';
import {Observable} from 'rxjs';

import {environment} from '../../../../environments/environment';
import {Pwt} from '../../shared/models/pwt.model';


@Injectable()
export class PwtDataService extends DefaultDataService<Pwt> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Pwt', http, httpUrlGenerator);
    }

    getById(id: string | number): Observable<Pwt> {
        return this.http.get<Pwt>(`${environment.herokuBackend}/pwt/${id}`);
    }
}
