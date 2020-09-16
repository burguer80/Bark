import {Injectable} from '@angular/core';
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Port} from '../../shared/models/port.model';

@Injectable()
export class PortDataService extends DefaultDataService<Port>{
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator){
    super('Port', http, httpUrlGenerator);
  }

  getAll(): Observable<Port[]> {
    return this.http.get<Port[]>('https://storage.googleapis.com/borderbot-staging.appspot.com/ports.json');
  }
}
