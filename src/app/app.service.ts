import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

    constructor(private http: Http) { }
    get(url, options) {
        return this.http.get(url, options);
    }

}
