import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtpService } from 'src/app/services/otp.service';
import { SurveyFormService } from 'src/app/services/survey-form.service';
import { VerifyOtpResponse } from 'src/app/types/verifyOtpRes';

@Component({
    selector: 'app-verify-otp-page',
    templateUrl: './verify-otp-page.component.html',
    styleUrls: ['./verify-otp-page.component.css'],
})
export class VerifyOtpPageComponent implements OnInit {
    otp: string = '';
    buckleNumber: string = '';

    constructor(
        private otpService: OtpService,
        private router: Router,
        private surveyFormService: SurveyFormService
    ) {}

    ngOnInit(): void {
        const buckleNumber = localStorage.getItem('buckleNumber');
        if (buckleNumber == null) {
            alert('Buckle number not found, please try again!');
            this.router.navigate(['/']);
            return;
        }
    }

    verifyOTP() {
        if (this.otp.length !== 4) {
            alert('OTP should be of 4 digits!');
            return;
        }

        const observer = {
            next: (response: string | VerifyOtpResponse) => {
                switch (response) {
                    case 'APRROVED':
                        const phoneNum = localStorage.getItem('phoneNum');
                        const name = localStorage.getItem('name');

                        if (phoneNum == null || name == null) {
                            this.router.navigate(['/']);
                            alert('Something went wrong, please try again!');
                            return;
                        }

                        const surveyObserver = {
                            error: (err: Error) => {
                                console.log(err);
                                alert(
                                    'Something went wrong, please try again!'
                                );
                                return;
                            },
                            complete: () => {
                                localStorage.removeItem('buckleNumber');
                                localStorage.removeItem('phoneNum');
                                localStorage.removeItem('name');
                                this.router.navigate(['/thankyou']);
                            },
                        };

                        this.surveyFormService
                            .submitResponse(phoneNum, name, this.buckleNumber)
                            .subscribe(surveyObserver);
                        break;
                }
            },
            error: (err: any) => {
                if (err.error) {
                    console.log(err.error);
                    switch (err.error) {
                        case 'OTP_EXPIRED':
                            this.router.navigate(['/otp']);
                            alert('OTP expired, please try again!');
                            break;
                        case 'REJECTED':
                            alert('WRONG OTP, please try again!');
                            break;
                        case 'RETRY':
                            this.router.navigate(['/']);
                            alert('Something went wrong, please try again!');
                            break;
                        default:
                            this.router.navigate(['/']);
                            alert('Error verifying otp, please try again!');
                            break;
                    }
                } else {
                    this.router.navigate(['/']);
                    alert('Error verifying otp, please try again!');
                }
            },
        };

        this.otpService.verifyOtp(this.otp).subscribe(observer);
    }
}
