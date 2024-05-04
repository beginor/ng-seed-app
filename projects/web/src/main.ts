import { registerLocaleData } from '@angular/common';
import zhHans from '@angular/common/locales/zh';
import zhHansExtra from '@angular/common/locales/extra/zh';
import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

registerLocaleData(zhHans, 'zh-CN', zhHansExtra);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
