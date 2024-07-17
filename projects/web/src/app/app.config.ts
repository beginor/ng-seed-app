import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'

import { provideNzI18n, zh_CN } from 'ng-zorro-antd/i18n';

import { routes } from './app.routes';

  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideHttpClient(withFetch()),
      provideAnimations(),
      provideNzI18n(zh_CN)
  ]

