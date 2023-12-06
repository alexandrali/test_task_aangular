import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonsCounterService } from '../../services/buttons-counter.service';

@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.css'],
})
export class CounterBtnComponent implements OnInit {
  btnLabel: string = '';
  @Output() clicks: EventEmitter<number> = new EventEmitter<number>();

  constructor(private service: ButtonsCounterService) {}

  ngOnInit() {
    this.btnLabel = this.service.getTimesNumber();
    this.service.timesClicked$.subscribe(() => {
      this.btnLabel = this.service.getTimesNumber();
    });
  }

  btnClicked() {
    this.service.btnClicked();
    this.clicks.emit(this.service.clicksNumber);
  }
}
