import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

import {Pwt} from '../../shared/models/pwt.model';

@Injectable({
  providedIn: 'root'
})
export class PwtEntityService extends EntityCollectionServiceBase<Pwt> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Pwt', serviceElementsFactory);
  }
}
