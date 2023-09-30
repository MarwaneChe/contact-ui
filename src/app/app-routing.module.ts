import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddContactComponent} from "./components/add-contact/add-contact.component";
import {ListContactComponent} from "./components/list-contact/list-contact.component";
import {UpdateContactComponent} from "./components/update-contact/update-contact.component";

const routes: Routes = [
  {path: 'contacts', component: ListContactComponent},
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'addcontact', component: AddContactComponent},
  {path: 'updatecontact/:id',component: UpdateContactComponent},
  {path: '**', redirectTo: 'contacts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
