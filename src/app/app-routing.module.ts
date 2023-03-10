import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { UnlockComponent } from './unlock/unlock.component';

 const routes:Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'login',component:SignupComponent
  },
  {
    path:'unlock',component:UnlockComponent
  },
  {
    path:'unlockAcc',component:UnlockComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'forgot',component:ForgotComponent
  }
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
