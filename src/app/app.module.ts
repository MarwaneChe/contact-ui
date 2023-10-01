import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { AddContactComponent } from './components/add-contact/add-contact.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from "@angular/material/card";
import { ConnectedComponent } from './components/connected/connected.component';
import {ContactHttpInterceptor} from "./interceptors/contact-http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ListContactComponent,
    AddContactComponent,
    HeaderComponent,
    UpdateContactComponent,
    LoginComponent,
    ConnectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: ContactHttpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
