import {Pipe, PipeTransform} from '@angular/core';

import {PortListRow} from '../models/port-list-row.model';

@Pipe({
    name: 'portSearch'
})
export class PortSearchPipe implements PipeTransform {

    transform(ports: PortListRow[], arg: string): PortListRow[] {
        if (arg === '' || arg.length < 3) {
            return ports;
        }
        const portResults = [];
        for (const border of ports) {
            if (border.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                portResults.push(border);
            }
        }
        return portResults;
    }

}
