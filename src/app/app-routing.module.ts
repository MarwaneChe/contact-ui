import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddContactComponent} from "./components/add-contact/add-contact.component";
import {ListContactComponent} from "./components/list-contact/list-contact.component";
import {UpdateContactComponent} from "./components/update-contact/update-contact.component";
import {LoginComponent} from "./components/login/login.component";
import {ConnectedComponent} from "./components/connected/connected.component";
import {authenticationGuard} from "./guards/authentication.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'connect', component: ConnectedComponent, canActivate:[authenticationGuard],children: [
      {path: 'contacts', component: ListContactComponent},
      {path: 'addcontact', component: AddContactComponent},
      {path: 'updatecontact/:id', component: UpdateContactComponent}
    ]
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
