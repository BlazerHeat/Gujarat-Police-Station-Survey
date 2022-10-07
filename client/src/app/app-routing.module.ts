import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetOtpPageComponent } from './pages/get-otp-page/get-otp-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InvaildBuckleNumberComponent } from './pages/invaild-buckle-number/invaild-buckle-number.component';
import { ResponsesPageComponent } from './pages/responses-page/responses-page.component';
import { SurveyPageComponent } from './pages/survey-page/survey-page.component';
import { ThankYouPageComponent } from './pages/thank-you-page/thank-you-page.component';
import { VerifyOtpPageComponent } from './pages/verify-otp-page/verify-otp-page.component';

const routes: Routes = [
    {
        path: 'invaild',
        component: InvaildBuckleNumberComponent,
    },
    {
        path: '',
        component: InvaildBuckleNumberComponent,
    },
    {
        path: 'home/:id',
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
        path: 'responses',
        component: ResponsesPageComponent,
    },
    {
        path: '**',
        component: InvaildBuckleNumberComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRouting {}
