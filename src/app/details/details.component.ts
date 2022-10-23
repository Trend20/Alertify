import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  heading='Why you should use Notify'

  detailsSectionContent=[
    {
      heading: 'Never miss a conversation about your brand',
      desc: 'Get to see when your company is mentioned on various social media outlets and online',
      imgUrl: '/assets/images/conversationMiss.svg',
      btnText: 'Get Started',
      id: 'brand'
    },
    {
      heading: 'Acquire More Customers',
      desc: 'Be notified in real time when someone is looking for your startup service',
      imgUrl: '/assets/images/aquireCustomer.svg',
      btnText: 'Get Started',
      id: 'customer'
    },
    {
      heading: 'Stay Ahead of Competition',
      desc: 'Understand what people think about your competitors & devise a killer competitive Strategy',
      imgUrl: '/assets/images/competition.jpg',
      btnText: 'Get Started',
      id: 'competition'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
