import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
currentUser =""
currentAcc=""

  users:any = {
    1000: { uid: 1000, uname: "Aahil", pswd: "userone", },
    1001: { uid: 1001, uname: "Abhinav", pswd: "usertwo", },
    1002: { uid: 1002, uname: "Laisha", pswd: "userthree", },
    1003: { uid: 1003, uname: "Riddhieka", pswd: "userfour", }
  }
  // adminlogin:any = {
  //   111: { aid: 1000, uname: "admin", pswd: "admin", },
    
  // }
  
  constructor(private http :HttpClient) { 
  }

  saveDetails(){

    localStorage.setItem("users",JSON.stringify(this.users))
  
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
   }
   
   if(this.currentAcc){
    localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
   }
  }
      getDetails(){

    if(localStorage.getItem("users")){
      this.users= JSON.parse(localStorage.getItem("users") || '')
      

    }
   if(localStorage.getItem("currentUser")){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
      }
      if(localStorage.getItem("currentAcc")){
        this.currentAcc = JSON.parse(localStorage.getItem("currentAcc") || '')
          }
    }
    
  register(uid:any,uname:any,pswd:any){

    const data ={

      uid,
      uname,
      pswd
    }
    return this.http.post("http://localhost:3000/register",data)


  }
  
  login(uid:any,pswd:any){

    const data ={
      uid,
      pswd
    }
    return this.http.post("http://localhost:3000/login",data)
  }
  // adminLogin(aid:any,pswd:any){

  //   const data ={
  //     aid,
  //     pswd
  //   }
  //   return this.http.post("http://localhost:3000/login",data)
  // }
  
}
    
              
        
      
      
    
  
  
   