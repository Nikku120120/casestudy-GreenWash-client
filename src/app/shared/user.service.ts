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

  getOrders(){
    return this.http.get('http://localhost:3000/api/retreiveorders', {headers : this.headers})
  }

  updateProfile(mobileNumber, Address){
    return this.http.put('http://localhost:3000/api/updateProfile',  { profileinfo: { mobilenumber: mobileNumber, Address: Address }}, {headers : this.headers},)
   }

   placeOrder(carcolour, carnumber, carcompany, carmodel, ordercost, address){
     return this.http.post('http://localhost:3000/api/placeOrder', {carDetails : {colour : carcolour,
    number :  carnumber, company : carcompany, model : carmodel}, orderDetails : {cost : ordercost, Address : address}}, {headers : this.headers})
   }
}

