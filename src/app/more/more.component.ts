import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  moreSectionContent=[
    {
      heading: 'Follow Your Industry',
      desc: 'Are you in a rapidly changing field? stay on top of the newest trends in your industry.',
      imgUrl: '/assets/images/family.svg',
    },
    {
      heading: 'Find Press Coverage',
      desc: 'Find news articles, blogs & tweets about your startup & build relationships with authors.',
      imgUrl: '/assets/images/b-meeting.svg',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
