import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService : AuthService,
    private router: Router) { }

  ngOnInit() {
  //  console.log(this.authservice.userEmail)
  }
  onLogout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
