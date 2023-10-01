import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import jwtDecode from "jwt-decode";
import {Router} from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: boolean = false;
  roles: any;
  loginConnected: any;
  accessToken!: any;


  constructor(private http: HttpClient,private router:Router) {
  }

  public login(login: string, password: string) {
    let params = new HttpParams().set("login", login).set("password", password);
    return this.http.post(environment.apiURLAuth, params, httpOptions);
  }

  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];
    let jwtDecoder: any = jwtDecode(this.accessToken);
    this.loginConnected = jwtDecoder.sub;
    this.roles = jwtDecoder.scope;
    window.localStorage.setItem("jwt-token",this.accessToken);
  }

  logout() {
    this.isAuthenticated = false;
    this.accessToken = undefined;
    this.loginConnected = undefined;
    this.roles = undefined;
    window.localStorage.removeItem("jwt-token");
    this.router.navigateByUrl("/login");
  }

  loadJwtTokenFromLocalStorage() {
    let jwtToken = window.localStorage.getItem("jwt-token");
    if(jwtToken){
      this.loadProfile({"access-token":jwtToken})
      this.router.navigateByUrl("/connect/contacts")
    }

  }
}
