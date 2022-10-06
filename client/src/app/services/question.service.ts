import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../types/question';
import { environment } from '../../environments/environment';

@Injectable()
export class QuestionService {
    BASE_URL = environment.BASE_URL;
    constructor(private http: HttpClient) {}

    getQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>(this.BASE_URL + '/questions');
    }
}
