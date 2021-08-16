import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TranslatorServices {
  constructor(private httpClient: HttpClient) {
  }

  public get(str): Observable<any> {
    const url = 'https://api.mymemory.translated.net/get?q=' + str + '&langpair=ru|en';
    return this.httpClient.get(url);
  }

}


