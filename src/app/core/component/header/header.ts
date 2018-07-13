import { NgModule, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-h-header',
    templateUrl: 'header.html',
    styleUrls: ['header.css']
})

export class HeaderComponent implements OnInit {
    label = 'Happy';
    constructor() { }

    ngOnInit() { }
}

@NgModule({
    imports: [],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})
export class HeaderModule { }

