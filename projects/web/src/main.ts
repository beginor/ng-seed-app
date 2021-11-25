import { registerLocaleData } from '@angular/common';
import zhHans from '@angular/common/locales/zh-Hans';
import zhHansEx from '@angular/common/locales/extra/zh-Hans';
import {
    enableProdMode,
    ɵNgModuleFactory as NgModuleFactory
} from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

registerLocaleData(zhHans, 'zh-Hans', zhHansEx);

if (environment.production) {
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(new NgModuleFactory(AppModule))
    .then(() => {
        // console.log('app bootstrap');
    })
    .catch(err => {
        console.error(err);
    });
