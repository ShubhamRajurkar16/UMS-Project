import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent {

  
unlockform=new FormGroup(
  {
    "confirmPwd":new FormControl('',[Validators.requiredTrue]),
    "email":new FormControl('',[Validators.email]),
    "newPwd": new FormControl('',[Validators.requiredTrue]),
    "tempPwd":new FormControl('',[Validators.required])
  }
)

  constructor(private http:UserService){ }

  postUnlock(){
    this.http.unlock(this.unlockform.value).subscribe((res)=>console.log(res));
    alert('unlock account successfull')
  }

  get tempmpwd(){
    return this.unlockform.get('tempPwd')
  }
}
