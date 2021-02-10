import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Port} from '../models/port.model';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PortService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Port[]> {
        return this.http.get<Port[]>(`${environment.herokuBackend}/ports`);
    }
}
