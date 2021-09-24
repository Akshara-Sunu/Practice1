import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    getProject(){
    return [
      {
        id: '01',
        name : 'Sphere',
        desc: 'jhiug ',
        cl: 'Inovics'
      },
      {
        id: '02',
        name : 'Sapphire',
        desc: 'buhgu',
        cl: 'Infosolutions'
      },
    ]
  }
  constructor() { }
}
