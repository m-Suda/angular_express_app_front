import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/User.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: [ './user-create.component.css' ]
})
export class UserCreateComponent implements OnInit {

    userId = new FormControl('', [
        Validators.required
    ]);
    userName = new FormControl('', [
        Validators.required
    ]);

    userForm: FormGroup = this.builder.group({
        userId: this.userId,
        userName: this.userName
    });

    constructor(
        private builder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    async create() {
        console.log(this.userId.value);
        console.log(this.userName.value);
        try {
            await this.userService.createUser(this.userId.value, this.userName.value);
            this.router.navigate([ '' ]);
        } catch (e) {
            console.error(e);
        }
    }

}
