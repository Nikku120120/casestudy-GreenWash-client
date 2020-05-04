import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name : string
  emailPattern = "[.]+@[.]+"
  email : string
  Password : string;
  data : any
  errorMessage : string

  userModel = new User('','');
  constructor(private authservice : AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  onLoginSubmit(){
    this.authservice.authenticateUser(this.userModel).subscribe(result => {
      console.log('user login successfull');
      console.log(result);
      this.authservice.storeUser(result);
     // this.router.navigate(['/login'])
     this.router.navigate(['/']);
    },err => {
      this.errorMessage = err.error.message
    });
  }


}
