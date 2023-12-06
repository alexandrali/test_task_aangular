import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ButtonsCounterService {
  private timesClickedSubject = new BehaviorSubject<number>(0);
  timesClicked$ = this.timesClickedSubject.asObservable();

  constructor() {}

  getTimesNumber(): string {
    const timesClicked = this.timesClickedSubject.value;
    return timesClicked + ' time' + (timesClicked === 1 ? '' : 's');
  }

  btnClicked() {
    const currentTimesClicked = this.timesClickedSubject.value;
    this.timesClickedSubject.next(currentTimesClicked + 1);
  }

  get clicksNumber(): number {
    return this.timesClickedSubject.value;
  }
}
