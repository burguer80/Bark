import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';
import {Observable} from 'rxjs';

import {Pwt} from '../../shared/models/pwt.model';


@Injectable()
export class PwtDataService extends DefaultDataService<Pwt> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Pwt', http, httpUrlGenerator);
    }

    getById(id: string | number): Observable<Pwt> {
        return this.http.get<Pwt>(`https://burguerbot-staging.herokuapp.com/port/${id}`);
    }
}
