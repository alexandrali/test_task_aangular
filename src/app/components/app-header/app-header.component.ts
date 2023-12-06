import { Component, OnInit } from '@angular/core';
import { ButtonsCounterService } from '../../services/buttons-counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  providers: [ButtonsCounterService],
})
export class AppHeaderComponent implements OnInit {
  hasTenClicks: boolean = false;

  constructor() {}

  ngOnInit() {}

  onButtonClicks(clicks: number) {
    this.hasTenClicks = clicks >= 10;
  }
}
