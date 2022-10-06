import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetOtpPageComponent } from './pages/get-otp-page/get-otp-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SurveyPageComponent } from './pages/survey-page/survey-page.component';
import { ThankYouPageComponent } from './pages/thank-you-page/thank-you-page.component';
import { VerifyOtpPageComponent } from './pages/verify-otp-page/verify-otp-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'survey',
        component: SurveyPageComponent,
    },
    {
        path: 'otp',
        component: GetOtpPageComponent,
    },
    {
        path: 'verifyotp',
        component: VerifyOtpPageComponent,
    },
    {
        path: 'thankyou',
        component: ThankYouPageComponent,
    },
    {
        path: '**',
        component: NotFoundPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRouting {}
