import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { SurveyFormService } from 'src/app/services/survey-form.service';
import { Option } from 'src/app/types/option';
import { Question } from 'src/app/types/question';

@Component({
    selector: 'app-survey-page',
    templateUrl: './survey-page.component.html',
    styleUrls: ['./survey-page.component.css'],
})
export class SurveyPageComponent implements OnInit {
    currentQuestion = 0;

    questions: Question[] = [];

    calculateProgress(): number {
        return Math.round(
            ((this.currentQuestion + 1) * 100) / this.questions.length
        );
    }

    progressPercent!: number;

    question!: string;
    questionId!: string;
    questionType!: 'checkbox' | 'radiobutton' | 'text';
    questionOptions!: Option[] | undefined;

    isLoading = true;

    formValues: any = {};

    constructor(
        private surveyFormService: SurveyFormService,
        private router: Router,
        private questionService: QuestionService
    ) {}

    ngOnInit(): void {
        this.questionService.getQuestions().subscribe({
            next: (res) => {
                this.questions = res;
            },
            error: async (err) => {
                console.error(err);
                this.isLoading = false;
                alert('Error gettings survey!');
                this.router.navigate(['/']);
            },
            complete: () => {
                this.updateQuestionInfo();
                this.progressPercent = this.calculateProgress();
                this.isLoading = false;
                console.log('completed!');
            },
        });
    }

    // ngOnDestroy(): void {
    //     this.surveyFormService.resetSurveyForm();
    // }

    updateQuestionInfo() {
        this.question = this.questions[this.currentQuestion].question;
        this.questionType = this.questions[this.currentQuestion].type;
        this.questionOptions = this.questions[this.currentQuestion].options;
        this.questionId = this.questions[this.currentQuestion]._id;
    }

    previousQuestion() {
        if (this.currentQuestion <= 0) {
            return;
        }

        this.currentQuestion--;
        this.progressPercent = this.calculateProgress();

        this.updateQuestionInfo();
    }

    nextQuestion() {
        if (this.currentQuestion >= this.questions.length - 1) {
            return;
        }

        this.currentQuestion++;
        this.progressPercent = this.calculateProgress();

        this.updateQuestionInfo();
    }

    handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        event.stopPropagation();

        // console.log(this.formValues);

        this.router.navigate(['/otp']);
    }
}
