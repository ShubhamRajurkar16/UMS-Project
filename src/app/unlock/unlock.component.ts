import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent {



  constructor(private http:UserService,private route:Router){ }

  unlockAccForm=new FormGroup({

    email:new FormControl('',[Validators.required]),
    tempPwd: new FormControl('',[Validators.required]),
    newPwd: new FormControl('',[Validators.required]),
    confirmPwd:new FormControl('',[Validators.required])
  
  })

  get tempmpwd(){
    return this.unlockAccForm.get('tempPwd')
  }

  postUnlock(){
    this.http.unlock(this.unlockAccForm.value).subscribe((res)=>console.log(res));
    alert('unlock account successfull')
    this.route.navigate(['home'])
  }


}


