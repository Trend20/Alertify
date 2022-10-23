import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerText=[
    'Copyright © Notify. All Rights Reserved.',
    'Notify is a 3rd party Experience. It is not created by, affiliated with, or supported by Slack.',
    'Privacy Policy'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
