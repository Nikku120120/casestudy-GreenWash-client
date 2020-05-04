import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
// import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token : any;
  userEmail: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/register', user, {headers : headers})
  }

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/login', user, {headers : headers})
  }

  storeUser(userdata){
    localStorage.setItem('token' , userdata.token);
    localStorage.setItem('Username' , userdata.fullName);
    localStorage.setItem('Email' , userdata.email);
    this.token = userdata.token;
    this.userEmail = userdata.email;
  }

  logout(){
    this.token = null;
    this.userEmail = null;
    localStorage.clear()
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedin() {
    let userEmail = localStorage.getItem('Email');
    if(!userEmail){
      return false
    }
    else {
      return true
    }
  }
}
