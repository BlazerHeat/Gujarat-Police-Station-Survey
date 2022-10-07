import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Option } from '../types/option';
import { environment } from 'src/environments/environment';

@Injectable()
export class SurveyFormService {
    BASE_URL = environment.BASE_URL;
    surveyFormData: any = {};

    constructor(private http: HttpClient) {}

    getSurveyFormData() {
        return this.surveyFormData;
    }

    getSurveyAnswer(questionId: string): Option | string | Option[] {
        return this.surveyFormData[questionId];
    }

    updateRadiobuttonField(questionId: string, checked: Option) {
        this.surveyFormData[questionId] = checked;
    }

    updateCheckboxField(questionId: string, checked: Option[]) {
        this.surveyFormData[questionId] = checked;
    }

    updateTextField(questionId: string, text: string) {
        this.surveyFormData[questionId] = text;
    }

    submitResponse(phoneNum: string, name: string, buckleNumber: string) {
        const payload = {
            ...this.surveyFormData,
            phoneNum,
            name,
            buckleNumber,
        };
        console.log(payload);
        return this.http.post(this.BASE_URL + '/responses', payload);
    }
}
