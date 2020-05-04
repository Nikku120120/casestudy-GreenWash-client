import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { UserService } from '../../shared/user.service'
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName : string
  userEmail : string
  errorMessage : string
  constructor(private authService:AuthService, private userService:UserService) { }

  ngOnInit() {

      this.userService.getProfile().subscribe(result => { 
        console.log(result)
      this.userName = result['user'].fullName;
      this.userEmail = result['user'].email
    },
     error => {
       this.errorMessage=error.error.message;
      })
  }
  ngOnDestroy(){
    this.userName = null;
    this.userEmail = null;
  }

}
