import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
UserData:any;
  constructor(private login:UserService, private route:Router)  {}

loginForm = new FormGroup({
  email:new FormControl('',[Validators.required]),
  pwd: new FormControl('',[Validators.required])
})


get email(){
  return this.loginForm.get('email') as FormControl
}
get pwd(){
return this.loginForm.get('pwd') as FormControl;
}


userLogin(){
this.login.loginUser(this.loginForm.value).subscribe((res:any)=>console.log(res));
alert('login succesfull')
this.route.navigate(['home'])
}






  
}


