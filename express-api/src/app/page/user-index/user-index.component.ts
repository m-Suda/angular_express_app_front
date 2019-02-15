import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserService } from "../../services/User.service";
import { User } from "../../model/user";

@Component({
    selector: 'app-user-index',
    templateUrl: './user-index.component.html',
    styleUrls: [ './user-index.component.css' ]
})
export class UserIndexComponent implements OnInit {

    activity: string;
    users: User[];
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

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) {
    }

    async ngOnInit() {
        try {
            await this.userService.fetchUsers()
                .then(users => {
                    console.log(users);
                    this.users = users;
                });
        } catch (e) {
            console.error(e);
        }
    }

    edit(user) {
        this.userService.setUser(new User(user));
    }

    async delete(user) {
        await this.userService.deleteUser(user.user_id);
        window.location.reload();
    }
}
