import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Author: Rakshit Shah
 * Instagram: https://www.instagram.com/rakshitshah94/
 * Github: https://github.com/rakshitshah94
 * Twitter: https://x.com/rakshitshah94
 * Full Article Link: https://www.9mood.com/implement-title-service-in-angular-easy-guide/
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Home - Angular Application');
  }
}
