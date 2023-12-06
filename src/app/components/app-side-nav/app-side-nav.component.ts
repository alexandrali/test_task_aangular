import { Component, OnInit } from '@angular/core';
import { ButtonsCounterService } from '../../services/buttons-counter.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './app-side-nav.component.html',
  styleUrls: ['./app-side-nav.component.css'],
  providers: [ButtonsCounterService],
})
export class AppSideNavComponent implements OnInit {
  hasTenClicks: boolean = false;
  constructor() {}

  ngOnInit() {}

  onButtonClicks(clicks: number) {
    this.hasTenClicks = clicks >= 10;
  }
}
