import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { Order } from '../../shared/models/order'
import { UserService } from '../../shared/user.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders : any

  constructor(private authService:AuthService, private userService:UserService){}
  ngOnInit(){
    this.userService.getOrders().subscribe(result => {
      this.orders = result['orders'];
    }, err => {
      console.log(err)
    })
  }

}
