import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideTranslation() {
    //let language = localStorage.getItem('Accept-Language');
    //if(!language) language === 'en'

    return {
        defaultLanguage: 'en',
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        },
    }
}