import { Component, Input } from '@angular/core';
import { SurveyFormService } from 'src/app/services/survey-form.service';
import { Option } from 'src/app/types/option';

@Component({
  selector: 'app-check-boxs',
  templateUrl: './check-boxs.component.html',
  styleUrls: ['./check-boxs.component.css'],
})
export class CheckBoxsComponent {
  @Input() questionId!: string;
  @Input() options: Option[] = [];

  constructor(private surveyFormService: SurveyFormService) {}

  onChange() {
    const checked = this.options.filter((op) => op.checked);
    this.surveyFormService.updateCheckboxField(this.questionId, checked);
  }
}
