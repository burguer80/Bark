import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';


import {Port} from '../../shared/models/port.model';
import {PortEntityService} from '../../store/port/port-entity.service';

@Component({
  selector: 'app-ports',
  templateUrl: './ports.page.html',
  styleUrls: ['./ports.page.scss'],
})
export class PortsPage implements OnInit {
  public ports$: Observable<Port[]> = this.portFacade.entities$;

  constructor(
      private portFacade: PortEntityService,
  ) { }

  ngOnInit() {
  }

}
