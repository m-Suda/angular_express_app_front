import { Injectable } from '@angular/core';
import { HttpClient, } from "@angular/common/http";
import * as config from '../../config/config';
import { User } from "../model/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user: User;

    constructor(
        private http: HttpClient
    ) {
    }

    setUser(user: User): void {
        this.user = user;
    }

    getUser(): User {
        console.log(this.user);
        return this.user;
    }

    public fetchUsers(): Promise<any> {

        return this.http.get(config.API_DOMAIN + 'user/fetchAll')
            .toPromise()
            .then(data => {
                console.log(data[ 'users' ]);
                return data[ 'users' ];
            })
            .catch(this.errorHandler);
    }

    public async fetchUser(id: string) {

    }

    public async createUser(id: string, name: string) {
        const user = {
            userId: id,
            userName: name,
            createUser: 'CREATE_USER',
            updateUser: 'CREATE_USER'
        };
        return this.http.post(config.API_DOMAIN + 'user/register', user)
            .toPromise()
            .then(response => {
                console.log(response[ 'message' ]);
                return response[ 'message' ];
            })
            .catch(this.errorHandler);
    }

    public async updateUser(id: string, name: string) {
        const user = {
            userId: id,
            userName: name,
            updateUser: 'UPDATE_USER'
        };
        return this.http.post(config.API_DOMAIN + 'user/modify', user)
            .toPromise()
            .then(response => {
                console.log(response[ 'message' ]);
                return response[ 'message' ];
            })
            .catch(this.errorHandler);
    }

    public async deleteUser(id: string) {
        const user = {
            userId: id,
            updateUser: 'UPDATE_USER',
            isDelete: 1
        };
        return this.http.post(config.API_DOMAIN + 'user/modify', user)
            .toPromise()
            .then(response => {
                console.log(response[ 'message' ]);
                return response[ 'message' ];
            })
            .catch(this.errorHandler);
    }

    private errorHandler(error) {
        console.error(`Errorだお : ${error}`);
        return Promise.reject(error.message || error);
    }
}
