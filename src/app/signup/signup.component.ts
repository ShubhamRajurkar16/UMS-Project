import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
UserData:any;
  constructor(private login:UserService)  {}

formData = new FormGroup({
  email:new FormControl(''),
  pwd: new FormControl('',[Validators.required])
})

get pwd(){
return this.formData.get('pwd');
}


postAll(){
this.login.postUser(this.formData.value).subscribe((res:any)=>console.log(res));
alert('login succesfull')
}
  
}
