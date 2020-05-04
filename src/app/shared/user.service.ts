import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private authService:AuthService) { }
  headers = new HttpHeaders().set('Authorization', 'bearer ' + this.authService.getToken())
  getProfile(){
   return this.http.get('http://localhost:3000/api/userProfile', {headers : this.headers})
  }
}

