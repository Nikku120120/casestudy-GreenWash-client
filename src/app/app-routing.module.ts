import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrdersComponent } from './components/orders/orders.component';
import { BookWashComponent } from './components/book-wash/book-wash.component';
import { AuthGuard } from './shared/auth.guard'

// import { HomeComponent } from './home/home.component';
// import { SignInComponent } from './home/sign-in/sign-in.component';
// import { SignupComponent } from './home/signup/signup.component';

 const routes: Routes = [

   {path:'', component: HomeComponent},
   {path:'register', component: RegisterComponent},
   {path:'login', component: LoginComponent},
   {path:'orders', component: OrdersComponent, canActivate:[AuthGuard]},
   {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
   {path:'bookwash', component: BookWashComponent, canActivate:[AuthGuard]},
//   {
//     path: 'signin', component: HomeComponent,
//     children: [{ path: '', component: SignInComponent }]
//   },
//   {
//     path: 'signup', component: HomeComponent,
//     children: [{ path: '', component: SignupComponent }]
//   },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [HomeComponent, SignInComponent,SignupComponent ]