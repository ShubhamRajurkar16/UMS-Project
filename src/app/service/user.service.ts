import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loginUser(body:any){
    return this.http.post(`http://15.206.171.20:9090/login`,body,{responseType:'text'})
  }

  postRegister(body:any){
    return this.http.post(`http://15.206.171.20:9090/saveUser`,body,{responseType:'text'})
  }

  getCountry(){
    return this.http.get(`http://15.206.171.20:9090/countries`)
  }

  getState(countryId:number){
    return this.http.get(`http://15.206.171.20:9090/states/${countryId}`)
  }
  
  getCity(stateId:number){
    return this.http.get(`http://15.206.171.20:9090/cities/${stateId}`)
  }

  email(email:any){
      return this.http.get( `http://15.206.171.20:9090/emailcheck/${email}`,{responseType:'text'})
  }

  unlock(body:any){
    return this.http.post(`http://15.206.171.20:9090/unlock`,body,{responseType:'text'})
  }

  forget(emailId:any){
    return this.http.get(`http://15.206.171.20:9090/forgotPwd/${emailId}`)
  }
}
