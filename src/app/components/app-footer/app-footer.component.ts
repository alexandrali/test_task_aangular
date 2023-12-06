import { Component, OnInit } from '@angular/core';
import { ButtonsCounterService } from '../../services/buttons-counter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css'],
  providers: [ButtonsCounterService],
})
export class AppFooterComponent implements OnInit {
  hasTenClicks: boolean = false;
  constructor() {}

  ngOnInit() {}

  onButtonClicks(clicks: number) {
    this.hasTenClicks = clicks >= 10;
  }
}
