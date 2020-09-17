import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PortEntityService} from '../modules/store/port/port-entity.service';
import {PwtEntityService} from '../modules/store/pwt/pwt-entity.service';
import { map} from 'rxjs/operators';
import {Pwt} from '../modules/shared/models/pwt.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public pwts: Observable<Pwt[]> = this.pwtFacade.entities$;
  public pwt$: Observable<Pwt>;

  constructor(
      private activatedRoute: ActivatedRoute,
      private portFacade: PortEntityService,
      private pwtFacade: PwtEntityService
      ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.folder);
    // this.pwtFacade.loading$.pipe(
    //     tap(loading => console.log(loading))
    // ).subscribe();

    // this.pwt$ = this.pwtFacade.entities$.pipe(
    //     map(portWaitTimes => portWaitTimes.find((pwt: Pwt) => pwt.port_number === '250301'))
    // );

    this.pwt$ = this.pwtFacade.filteredEntities$.pipe(
        map(portWaitTimes => portWaitTimes.find((pwt: Pwt) => pwt.port_number === '250301'))
    );
  }

}
