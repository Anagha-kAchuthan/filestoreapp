import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "File Storing App"

  uid = "user id Please"
  pswd = ""
  loginForm = this.fb.group({

    uid: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      var uid = this.loginForm.value.uid;
      var pswd = this.loginForm.value.pswd;
      this.ds.login(uid, pswd)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          localStorage.setItem("userName",result.userName)
          this.router.navigateByUrl("home")
        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
      // if (result) {
      //   alert("login successfully")
        
      // }
    }
    else {
      alert("invalid form")
    }
  }
}