import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { globalVar } from './global/global-constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moti';

  constructor(
    @Inject(PLATFORM_ID) private platform: any
  ) {

    globalVar.isWeb = isPlatformBrowser(this.platform);
  }
}
