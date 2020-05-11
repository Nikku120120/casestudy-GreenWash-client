import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { UserService } from '../../shared/user.service'
import { jsonpCallbackContext } from '@angular/common/http/src/module';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName : string
  userEmail : string
  userMobileNumber : any
  userAddress : any
  updatemobile : any
  updateAddress : any
  updateclicked : boolean = false;
  errorMessage : string;
  walletbalance : Number
  constructor(private authService:AuthService, private userService:UserService) { }

  ngOnInit() {

      this.userService.getProfile().subscribe(result => { 
        console.log(result)
      this.userName = result['user'].fullName.toUpperCase();
      this.userEmail = result['user'].email;
      if(result['user'].profileinfo){
        this.userMobileNumber = result['user'].profileinfo.mobilenumber || 'NA';
        this.userAddress = result['user'].profileinfo.Address || 'NA';
        this.walletbalance = result['user'].walletbalance || 0;
      }
      
    },
     error => {
       this.errorMessage=error.error.message;
      })
  }
  update(){
    this.updateclicked = true;
    this.updatemobile = this.userMobileNumber;
    this.updateAddress = this.userAddress;
  }
  save(){
    console.log(this.updatemobile)
    console.log(this.updateAddress)
    this.userService.updateProfile(this.updatemobile, this.updateAddress).subscribe(result => {
      this.userMobileNumber = result['user'].profileinfo.mobilenumber || 'NA';
      this.userAddress = result['user'].profileinfo.Address || 'NA';
      this.updateclicked = false;
    },error => {
      this.errorMessage=error.error.message;
    })
    
  }
  ngOnDestroy(){
    this.userName = null;
    this.userEmail = null;
  }

}
