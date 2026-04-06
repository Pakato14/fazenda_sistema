import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginUser } from '../../../models/login-user.model';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  @ViewChild("formLogin") formLogin!: NgForm;
  loginUsers!: LoginUser;

  constructor(
    private auth: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginUsers = new LoginUser()
  }

  login() {
    this.loginUsers.user_password = this.auth.CriptografarMD5(this.loginUsers.user_password)
    // console.log('loginUser', this.loginUsers)
    this.auth.login(this.loginUsers).subscribe({
      next: (res) => res,
      error: (e) => (this.toastr.error(e.error.message), this.formLogin.reset())
    })
  }

  gerarPin(){
    this.auth.resetPin(this.loginUsers).subscribe(
      () =>{
        this.toastr.success('Verifique seu Email');
        this.formLogin.reset();
      },
      (error) => {
        this.toastr.error('Erro durante o processo', error.error.message);
        this.formLogin.reset();
      }
    );

  }
}
