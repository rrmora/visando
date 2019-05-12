import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password)
    .then((result) => {
      this.router.navigate(['/main/dashboard']);
    }).catch((err) => {
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

  googleLogin() {
    this.authService.googleLogin()
    .then((result) => {
      this.router.navigate(['/main/dashboard']);
    }).catch((err) => {
      console.log(err);
    });
  }




}
