import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Pwt} from '../models/pwt.model';

@Injectable({
  providedIn: 'root'
})
export class PwtService {

  constructor(private http: HttpClient) {
  }

  getByKey(key: string | number): Observable<Pwt> {
    return this.http.get<Pwt>(`${environment.herokuBackend}/latest_wait_times/${key}`);
  }
}
