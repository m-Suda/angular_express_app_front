import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserIndexComponent } from "./page/user-index/user-index.component";
import { UserEditComponent } from "./page/user-edit/user-edit.component";
import { UserCreateComponent } from "./page/user-create/user-create.component";

const routes: Routes = [
    { path: '', component: UserIndexComponent },
    { path: 'create', component: UserCreateComponent },
    { path: 'edit', component: UserEditComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
