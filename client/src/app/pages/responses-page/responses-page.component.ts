import { Component, OnInit } from '@angular/core';
import { ResponsesService } from 'src/app/services/responses.service';

@Component({
    selector: 'app-responses-page',
    templateUrl: './responses-page.component.html',
    styleUrls: ['./responses-page.component.css'],
})
export class ResponsesPageComponent implements OnInit {
    loading = true;
    responses = {};

    constructor(private responsesService: ResponsesService) {}

    ngOnInit(): void {
        const observer = {
            next: (res: Object) => {
                this.responses = res;
            },
            error: (err: Error) => {
                alert('Error fetching responses!');
                this.loading = false;
            },
            complete: () => {
                this.loading = false;
            },
        };

        this.responsesService.getResponses().subscribe(observer);
    }
}
