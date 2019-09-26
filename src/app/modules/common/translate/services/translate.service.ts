import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Observable } from 'rxjs';

@Injectable()
export class MwTranslateService {

  constructor(private translate: TranslateService) { }

  getTranslation(key: string | string[], params?: Object): string {
    return key ? this.translate.instant(key, params) : '';
  }

  getTranslationMap(lang: string): Observable<any> {
    return this.translate.getTranslation(lang);
  }

  use(lang: string) {
    this.translate.use(lang);
  }
}
