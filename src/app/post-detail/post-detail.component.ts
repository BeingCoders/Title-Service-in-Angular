import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
/**
 * Author: Rakshit Shah
 * Instagram: https://www.instagram.com/rakshitshah94/
 * Github: https://github.com/rakshitshah94
 * Twitter: https://x.com/rakshitshah94
 * Full Article Link: https://www.9mood.com/implement-title-service-in-angular-easy-guide/
 */
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  constructor(private titleService: Title, private route: ActivatedRoute) {}
  postId: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = params['id']; // Assuming you're fetching a post by ID
      this.titleService.setTitle(`Post #${this.postId} - Angular Blog`);
    });
  }
}
