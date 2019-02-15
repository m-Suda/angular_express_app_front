import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule } from "@angular/material";

import { UserService } from "./services/User.service";
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserCreateComponent } from './page/user-create/user-create.component';
import { UserIndexComponent } from './page/user-index/user-index.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
    declarations: [
        AppComponent,
        UserEditComponent,
        UserCreateComponent,
        UserIndexComponent,
        ErrorMessageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    providers: [
        UserService,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
