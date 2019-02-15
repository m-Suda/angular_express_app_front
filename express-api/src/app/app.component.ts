import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {

    users: any;
    displayedColumns: string[] = [
        'userId',
        'userName',
        'createDate',
        'createUser',
        'updateDate',
        'updateUser',
        'edit',
        'delete'
    ];

    constructor() {
    }
}
