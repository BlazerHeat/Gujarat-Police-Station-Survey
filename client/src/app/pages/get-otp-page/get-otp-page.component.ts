import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OtpService } from 'src/app/services/otp.service';

@Component({
    selector: 'app-get-otp-page',
    templateUrl: './get-otp-page.component.html',
    styleUrls: ['./get-otp-page.component.css'],
})
export class GetOtpPageComponent {
    name: string = '';
    phoneNo: string = '';

    constructor(private otpService: OtpService, private router: Router) {}

    getOTP() {
        if (this.name === '') {
            alert('Please Enter Name');
            return;
        }

        if (this.phoneNo.length != 10) {
            alert('Please Enter valid Phone No.');
            return;
        }

        const parsedPhoneNo = parseInt(this.phoneNo);

        if (isNaN(parsedPhoneNo)) {
            alert('Please Enter valid Phone No.');
            return;
        }

        console.log(this.name, this.phoneNo);

        const observer = {
            error: (err: Error) => {
                console.error(err);
                alert('Error sending OTP!');
                this.router.navigate(['/']);
            },
            complete: () => {
                localStorage.setItem('phoneNum', this.phoneNo);
                localStorage.setItem('name', this.name);
                this.router.navigate(['/verifyotp']);
            },
        };

        this.otpService.sendOtp(this.phoneNo).subscribe(observer);
    }
}
