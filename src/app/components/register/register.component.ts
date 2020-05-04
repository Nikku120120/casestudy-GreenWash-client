import { Component, OnInit } from '@angular/core';
import {registerUser} from '../../shared/models/registerUser';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel = new registerUser('','','');
  emailError : string;
  constructor(private authService : AuthService,
     private router : Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    // console.log(this.userModel.fullName);
    // console.log(this.userModel.email);
    // console.log(this.userModel.password);
    this.authService.registerUser(this.userModel).subscribe(result => {
      console.log('user registration successfull');
     // this.router.navigate(['/login'])
     this.router.navigate(['/login']);
    },err => {
      if(err.error){
      this.emailError = err.error[0]
      console.log(this.emailError)
      }
    });
  }
}
