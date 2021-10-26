import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uid=""
  pswd=""
  uname="User name please"

 registerForm = this.fb.group({
   uname : ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
   uid : ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
   pswd : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

 })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    
    
    if(this.registerForm.valid){
    var uid = this.registerForm.value.uid;
    var pswd = this.registerForm.value.pswd;
    var uname = this.registerForm.value.uname;
    
    
 this.ds.register(uid,uname,pswd)
 .subscribe((result:any)=>{

if(result){
  alert("Successfully registered")
  this.router.navigateByUrl("")
}
},(result:any)=>{
  alert(result.error.message)
  this.router.navigateByUrl("")
})
    
  }
  else{
    alert("Form invalid")
  }

}
}