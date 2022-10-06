import { Component, Input, OnInit } from '@angular/core';
import { SurveyFormService } from 'src/app/services/survey-form.service';
import { Option } from 'src/app/types/option';

@Component({
    selector: 'app-radio-buttons',
    templateUrl: './radio-buttons.component.html',
    styleUrls: ['./radio-buttons.component.css'],
})
export class RadioButtonsComponent implements OnInit {
    @Input() questionId!: string;
    @Input() options: Option[] = [];

    selectedOptionId!: string;
    constructor(private surveyFormService: SurveyFormService) {}

    ngOnInit(): void {
        const ans = this.surveyFormService.getSurveyAnswer(this.questionId);
        if (
            ans === undefined ||
            ans === null ||
            typeof ans === 'string' ||
            ans instanceof Array
        ) {
            return;
        }

        this.selectedOptionId = ans._id;
    }

    onChange(op: Option) {
        this.selectedOptionId = op._id;
        console.log(this.options);
        this.surveyFormService.updateRadiobuttonField(this.questionId, op);
    }
}
