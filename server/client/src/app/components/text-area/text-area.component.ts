import { Component, Input, OnInit } from '@angular/core';
import { SurveyFormService } from 'src/app/services/survey-form.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent implements OnInit {
  @Input() questionId!: string;

  text = '';
  constructor(private surveyFormService: SurveyFormService) {}
  ngOnInit(): void {
    const text = this.surveyFormService.getSurveyAnswer(this.questionId);

    if (text !== undefined && typeof text === 'string') {
      this.text = text;
    }
  }

  onChange() {
    this.surveyFormService.updateTextField(this.questionId, this.text);
  }
}
