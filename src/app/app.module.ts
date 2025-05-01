import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { Title } from '@angular/platform-browser';
import { CustomTitleStrategy } from './custom-title-strategy';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
/**
 * Author: Rakshit Shah
 * Instagram: https://www.instagram.com/rakshitshah94/
 * Github: https://github.com/rakshitshah94
 * Twitter: https://x.com/rakshitshah94
 * Full Article Link: https://www.9mood.com/implement-title-service-in-angular-easy-guide/
 */
@NgModule({
  declarations: [AppComponent, HomeComponent, PostDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: TitleStrategy, useClass: CustomTitleStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
