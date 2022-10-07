import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SurveyPageComponent } from './pages/survey-page/survey-page.component';
import { CheckBoxsComponent } from './components/check-boxs/check-boxs.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { FormsModule } from '@angular/forms';
import { SurveyFormService } from './services/survey-form.service';
import { GetOtpPageComponent } from './pages/get-otp-page/get-otp-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { QuestionService } from './services/question.service';
import { LoadingComponent } from './components/loading/loading.component';
import { ThankYouPageComponent } from './pages/thank-you-page/thank-you-page.component';
import { OtpService } from './services/otp.service';
import { VerifyOtpPageComponent } from './pages/verify-otp-page/verify-otp-page.component';
import { ResponsesPageComponent } from './pages/responses-page/responses-page.component';
import { InvaildBuckleNumberComponent } from './pages/invaild-buckle-number/invaild-buckle-number.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        SurveyPageComponent,
        CheckBoxsComponent,
        RadioButtonsComponent,
        TextAreaComponent,
        GetOtpPageComponent,
        HeaderComponent,
        ProgressBarComponent,
        LoadingComponent,
        ThankYouPageComponent,
        VerifyOtpPageComponent,
        ResponsesPageComponent,
        InvaildBuckleNumberComponent,
    ],
    imports: [BrowserModule, AppRouting, FormsModule, HttpClientModule],
    providers: [SurveyFormService, QuestionService, OtpService],
    bootstrap: [AppComponent],
})
export class AppModule {}
