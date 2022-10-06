import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VerifyOtpResponse } from '../types/verifyOtpRes';

@Injectable()
export class OtpService {
    BASE_URL = environment.BASE_URL;
    constructor(private http: HttpClient) {}

    sendOtp(phoneNum: string) {
        return this.http.post(
            this.BASE_URL + '/auth/sendotp',
            {
                phoneNum,
            },
            {
                responseType: 'text',
            }
        );
    }

    verifyOtp(otp: string): Observable<string> {
        const phoneNum = localStorage.getItem('phoneNum');
        return this.http.post(
            this.BASE_URL + '/auth/verifyotp',
            { otp, phoneNum },
            {
                responseType: 'text',
            }
        );
    }
}
