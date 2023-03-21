import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent  {
  username = ""
  password = ""
  errorMessage = 'invalid credentials'
  invalidLogin = false
  //dependency injection:
  constructor(private router: Router, private hard: HardcodedAuthenticationService) { }


  handleLogin() {
    // if(this.username==="imen" && this.password ==='4444'){
    if (this.hard.authenticate(this.username, this.password)) {
      this.router.navigate(['MyProfile', this.username]) //redirect to myprofile
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }

  }
}
