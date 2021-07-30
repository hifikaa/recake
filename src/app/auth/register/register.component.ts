import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
//inisial untuk data formulir
user:any={};
hide:boolean=true;
//constructor
  constructor(
    public api: ApiService,
    public router: Router,
    public auth: AngularFireAuth
  ) { }
//fungsi insial dijalankan ketika class dipanggil
  ngOnInit(): void {
  }
  //form validation
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.minLength(6), Validators.required]);

  //register
  loading: boolean = false;
  register(user: any)
  {
    this.loading=true;
    this.auth.createUserWithEmailAndPassword(user.email, user.password).then(res=>{
      this.loading=false;
      alert('Register berhasil');
      this.router.navigate(['auth/login']);
    }).catch(err=>{
      this.loading=false;
      alert('Ada masalah...');
    });
   
  }

}
