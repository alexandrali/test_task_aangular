import { Component, OnInit } from '@angular/core';
import { ButtonsCounterService } from '../../services/buttons-counter.service';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css'],
  providers: [ButtonsCounterService],
})
export class AppContentComponent implements OnInit {
  hasTenClicks: boolean = false;
  constructor() {}

  ngOnInit() {}

  onButtonClicks(clicks: number) {
    this.hasTenClicks = clicks >= 10;
  }
}
