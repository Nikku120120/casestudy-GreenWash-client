import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { Order } from '../../shared/models/order'
import { UserService } from '../../shared/user.service';
import {NgForm} from '@angular/forms'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-book-wash',
  templateUrl: './book-wash.component.html',
  styleUrls: ['./book-wash.component.css']
})
export class BookWashComponent implements OnInit {

  email : string;
  carcolour : string;
  carnumber : string;
  carcompany : string;
  carmodel : string;
  ordercost : number;
  address : string;
  carDetails : any
  orderDetails : any
  successMessage : any

  public userName;
  public errorMessage;
  servicenames = [ { cost: 100, name: 'wash' }, { cost: 200, name: 'premium wash' }]
  constructor(private authService : AuthService,
     private router : Router,
     private userService : UserService) { }

  ngOnInit() {
    this.userService.getProfile().subscribe(result => { 
    console.log(result)
    this.userName = result['user'].fullName.toUpperCase();
    this.email = result['user'].email;
  },
  error => {
    this.errorMessage=error.error.message;
   })

  }
  
  changeservice(e){
    this.ordercost = e.target.value;
  }

  onOrderPlaced() : void{
    this.userService.placeOrder(this.carcolour, this.carnumber, this.carcompany, this.carmodel, this.ordercost, this.address).subscribe(result => {
      this.successMessage = "Order Placed SuccessFully"
      this.carcolour = null;
      this.carnumber=null;
      this.carcompany = null;
      this.carmodel = null;
      this.ordercost = null;
      this.address = null;
      this.servicenames = null

    }, error => {
      this.errorMessage=error.error.message;
    })
  }
}
