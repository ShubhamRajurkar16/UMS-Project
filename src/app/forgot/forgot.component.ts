import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
login: any;

  constructor(private forget:UserService){ 
  }

  forgetData:any

  forgetPass(emailId:any){
    this.forget.forget(emailId).subscribe((res)=>this.forgetData=res);
    alert('password reset sucessfull')
  }

}
