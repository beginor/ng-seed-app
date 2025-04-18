import { APP_BASE_HREF } from '@angular/common';
import {
    LOCALE_ID, inject, ApplicationConfig,
    provideZoneChangeDetection
} from '@angular/core';
import {
    provideHttpClient, withFetch,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { provideNzI18n, zh_CN } from 'ng-zorro-antd/i18n';

import {
    isProd, CONTEXT_ROOT, API_ROOT, IS_PRODUCTION,
} from 'app-shared';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection ({eventCoalescing: true}),
        provideRouter (routes),
        provideHttpClient (withFetch ()),
        provideAnimationsAsync (),
        provideNzI18n (zh_CN),
        {
            provide: NzModalService,
            useClass: NzModalService,
        },
        {
            provide: NzMessageService,
            useClass: NzMessageService,
        },
        {
            provide: LOCALE_ID,
            useValue: 'zh-Hans'
        },
        {
            provide: CONTEXT_ROOT,
            useValue: ''
        },
        {
            provide: APP_BASE_HREF,
            useFactory: (): string => {
                const contextRoot = inject (CONTEXT_ROOT);
                return `${contextRoot}/web/`;
            },
        },
        {
            provide: API_ROOT,
            useFactory: (): string => {
                const contextRoot = inject (CONTEXT_ROOT);
                return `${contextRoot}/api`;
            },
        },
        {
            provide: IS_PRODUCTION,
            useFactory: isProd
        },
    ]
}
