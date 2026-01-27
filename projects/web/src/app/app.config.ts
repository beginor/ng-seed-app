import { APP_BASE_HREF } from '@angular/common';
import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZoneChangeDetection,
    LOCALE_ID,
    inject,
} from '@angular/core';
import {
    provideHttpClient, withFetch,
} from '@angular/common/http';
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
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideHttpClient(withFetch()),
        provideNzI18n(zh_CN),
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
            useValue: '/app'
        },
        {
            provide: APP_BASE_HREF,
            useFactory: (): string => {
                const contextRoot = inject(CONTEXT_ROOT);
                return `${contextRoot}/web/`;
            },
        },
        {
            provide: API_ROOT,
            useFactory: (): string => {
                const contextRoot = inject(CONTEXT_ROOT);
                return `${contextRoot}/api`;
            },
        },
        {
            provide: IS_PRODUCTION,
            useFactory: isProd
        },
    ]
}
