import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  featuresContent=[
    {
      imgUrl: '/assets/images/addKeyword.svg',
      heading: 'Add Keywords or Social Accounts',
      desc: 'Setup notifications for your startup name, competitors, events and topics that you are interested in.'
    },
    {
      imgUrl: '/assets/images/selectSource.svg',
      heading: 'Select Sources',
      desc: 'Pick from dozens of sources, like Twitter, Facebook, Instagram, Reddit, Blogs, News, Youtube & HackerNews.'
    },
    {
      imgUrl: '/assets/images/getNotified.svg',
      heading: 'Get Notified',
      desc: 'Receive Slack or Email notifications, once your topic gets mentioned.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
