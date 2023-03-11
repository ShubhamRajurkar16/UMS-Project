import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
// Validators.pattern('[a-zA-Z].*')]
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  RegistrationData = new FormGroup({
 
  cityId: new FormControl(),
  countryId :new FormControl() ,
  dob : new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  fname : new FormControl('',[Validators.required,Validators.minLength(2)]),
  gender : new FormControl('',[Validators.required]),
  lname : new FormControl('',[Validators.required,Validators.minLength(2)]),
  phno : new FormControl('',[Validators.required]),
  stateId : new FormControl()
  }) 


  get fname(): FormControl{
    return this.RegistrationData.get('fname') as FormControl;
  }
  get dob(): FormControl{
    return this.RegistrationData.get('dob') as FormControl;
  }
  get Email(): FormControl{
    return this.RegistrationData.get('email') as FormControl;
  }
  get gender(): FormControl{
    return this.RegistrationData.get('gender') as FormControl;
  }
  get lname(): FormControl{
    return this.RegistrationData.get('lname') as FormControl;
  }
  get phno(): FormControl{
    return this.RegistrationData.get('phno') as FormControl;
  }

  constructor(private register:UserService){
    this.countries()
  }
userData:any;
country:any;
stateD:any;
citty:any;


  registerUser(){
    this.register.postRegister(this.RegistrationData.value).subscribe((res)=>console.log(res));
    alert('registration succesfull')
  }

  countries(){
    this.register.getCountry().subscribe((res)=>this.country=res)
  }

  state(countryId:number){
    this.register.getState(countryId).subscribe((res)=>this.stateD=res);
  }

  city(cityId:number){
    this.register.getCity(cityId).subscribe((res)=>this.citty=res)
  }

  emailCheck(email:any){
    this.register.email(email).subscribe((res)=>console.log(res))
  }
 
}
