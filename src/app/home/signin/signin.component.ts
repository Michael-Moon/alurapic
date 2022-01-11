import { PlataformDetectorService } from './../../core/plataform-detector/plataform-detector.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from './../../core/auth/auth.service';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
     private authService: AuthService,
     private router: Router,
     private platformDetectorService: PlataformDetectorService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['' , Validators.required],
      password: ['' , Validators.required]
    });
  }

  login(){
    const userName =this.loginForm.get('userName').value;
    const password =this.loginForm.get('password').value;

    this.authService.authenticate(userName,password).subscribe( () =>  this.router.navigate(['user', userName]),
    err => {
      console.log(err)
      this.loginForm.reset();
      this.platformDetectorService.isPlatformBrowser && this.userNameInput.nativeElement.focus();


    }
    );
  }
}
