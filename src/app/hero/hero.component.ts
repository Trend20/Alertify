import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroDescription = 'Whenever your startup gets mentioned on';
  pageHeader = 'Get Notified on Slack or Email';

  constructor() { }

  ngOnInit(): void {
  }

}
