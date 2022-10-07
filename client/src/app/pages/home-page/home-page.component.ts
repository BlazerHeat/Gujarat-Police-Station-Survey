import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
    id: string = '';
    validList: string[] = ['20CS016', '20CS065', '20CS074', '20CS057'];
    constructor(private route: ActivatedRoute, private router: Router) {}
    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (!this.verifyBuckleNumber(id) || id == null) {
            this.router.navigate(['/invaild']);
            return;
        }
        localStorage.setItem('buckleNumber', id);
    }

    verifyBuckleNumber(buckleNumber: string | null): boolean {
        if (buckleNumber == null) {
            return false;
        }

        console.log(this.validList.find((x) => x === buckleNumber));

        return this.validList.some((x) => x === buckleNumber);
    }
}
