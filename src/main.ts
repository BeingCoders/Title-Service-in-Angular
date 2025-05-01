import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
/**
 * Author: Rakshit Shah
 * Instagram: https://www.instagram.com/rakshitshah94/
 * Github: https://github.com/rakshitshah94
 * Twitter: https://x.com/rakshitshah94
 * Full Article Link: https://www.9mood.com/implement-title-service-in-angular-easy-guide/
 */
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
