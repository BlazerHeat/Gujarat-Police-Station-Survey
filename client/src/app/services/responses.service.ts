import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ResponsesService {
    BASE_URL = environment.BASE_URL;

    constructor(private http: HttpClient) {}

    getResponses() {
        return this.http.get(this.BASE_URL + '/responses');
    }
}
