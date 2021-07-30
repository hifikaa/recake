import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //inisial untuk data formulir
  user:any={};
  hide: boolean = true;
  //constructor
  constructor(
  public api: ApiService,
  public router: Router,
  public auth: AngularFireAuth
  ) { }
  //fungsi inisial, dijalankan ketika class ini dipanggil
  ngOnInit(): void {
  }
  //form validation
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required]);

  //register
  loading: boolean = false;
  login(user: any)
  {
    this.loading=true;
    this.auth.signInWithEmailAndPassword(user.email, user.password).then(res=>{
     this.loading=false;
     this.router.navigate(['admin/dashboard']);
    }).catch(err=>{
      this.loading=false;
      alert('Tidak dapat login');
    })
  }
}
