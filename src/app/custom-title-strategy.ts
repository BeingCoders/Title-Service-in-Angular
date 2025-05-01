import { Injectable } from '@angular/core';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';
/**
 * Author: Rakshit Shah
 * Instagram: https://www.instagram.com/rakshitshah94/
 * Github: https://github.com/rakshitshah94
 * Twitter: https://x.com/rakshitshah94
 * Full Article Link: https://www.9mood.com/implement-title-service-in-angular-easy-guide/
 */
@Injectable({
  providedIn: 'root',
})
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private titleService: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    // Use the route data to set the title
    const title =
      snapshot.root.firstChild?.data['title'] || 'Default Angular App';
    this.titleService.setTitle(title);
  }
}
