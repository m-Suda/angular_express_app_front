import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/User.service";
import { User } from "../../model/user";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: [ './user-edit.component.css' ]
})
export class UserEditComponent implements OnInit {

    // 一覧から値渡しのために必要
    user: User;

    userName: FormControl;
    userForm: FormGroup = this.builder.group({
        userName: this.userName
    });

    constructor(
        private builder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
    }

    async ngOnInit() {
        this.user = await this.userService.getUser();
        this.userName = new FormControl(this.user.user_name, [
            Validators.required
        ]);
    }

    async update() {
        console.log(this.userName.value);
        try {
            await this.userService.updateUser(this.user.user_id, this.userName.value);
            this.router.navigate([ '' ]);
        } catch (e) {
            console.error(e);
        }
    }
}
