import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricingContent=[
    {
      image:'/assets/images/kiteIcon.svg',
      priceTag:{
        priceText: 'Free',
        value: 0,
        period: 'Per Month'
      },
      listItems:{
        first: '1 Monitor',
        item2: 'Twitter, Reddit & HackerNews',
        item3: 'Limited Filters',
        item4: 'Recent Mentions Notifications'
      },
      id: 'first'
    },
    {
      image:'/assets/images/ballonIcon.svg',
      priceTag:{
        priceText: 'Starter',
        value: 5,
        sub: .98,
        period: 'Per Month'
      },
      listItems:{
        first: '2 Monitor',
        item2: 'Facebook, Instagram, YouTube ',
        item3: 'Blogs, Forums, & News',
        item4: 'Advanced Filters',
        item5: 'Recent & Top Mentions Notifications'
      },
      id: 'second'
    },
    {
      image:'/assets/images/rocketIcon.svg',
      priceTag:{
        priceText: 'Pro',
        value: 14,
        sub: .95,
        period: 'Per Month'
      },
      listItems:{
        first: '5 Monitor',
        item2: 'Facebook, Instagram, YouTube ',
        item3: 'Blogs, Forums, & News',
        item4: 'Advanced Filters',
        item5: 'Recent & Top Mentions Notifications'
      },
      id: 'third'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
