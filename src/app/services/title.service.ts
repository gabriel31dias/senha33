import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private titleSubject = new BehaviorSubject<string>('');
  
  constructor() { }

  setTitle(newTitle: string) {
    this.titleSubject.next(newTitle);
  }

  getTitle() {
    return this.titleSubject.asObservable();
  }
}
