import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmitLoginForm() {
    this.authenticationService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe({
      next: data => {
        this.authenticationService.loadProfile(data);
        this.router.navigateByUrl("/connect/contacts");
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
