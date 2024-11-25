// angular import
import { Component, OnInit } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { Router,ActivatedRoute } from '@angular/router';
//import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/core/service/auth.service';
import { ShareService } from 'src/app/core/service/share.service'; // Adjust the path as needed
import { Role } from 'src/app/core/models/role'; // Adjust the path as needed

// project import
//import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ApiService } from 'src/app/api/api.service';
//import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-sign-in',

 // imports: [SharedModule, RouterModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatIconModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  message: string = "";
  logo=""

  constructor(
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private shared: ShareService,
    private apiService : ApiService
  ) {
    // Initialize the form
    this.authForm = this.formBuilder.group({
      // username: ['', Validators.required],
      // password: ['', Validators.required],
    });
    
  }
  spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Login',
    spinnerSize: 18,
    raised: true,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
    buttonIcon: {
      fontIcon: 'favorite',
    },
  };

  
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['admin@school.org', Validators.required],
      password: ['admin@123', Validators.required],
    });
    this.shared.messageSource.subscribe((message) => (this.message = message))
    this.shared.logoSouce.subscribe((logo) => (this.logo = logo))
  }
  get f() {
    return this.authForm.controls;
  }
  
  adminSet() {
   
    this.authForm.get('username')?.setValue('admin@school.org');
    this.authForm.get('password')?.setValue('admin@123');
  }
  teacherSet() {
    this.authForm.get('username')?.setValue('teacher@school.org');
    this.authForm.get('password')?.setValue('teacher@123');
  }
  studentSet() {
    this.authForm.get('username')?.setValue('student@school.org');
    this.authForm.get('password')?.setValue('student@123');
  }

  onSubmit() {
    alert('test');
    this.submitted = true;
    this.spinnerButtonOptions.active = true;
    this.error = '';
    if (this.authForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      // this.apiService.authPostAPI(`login`, this.authForm).subscribe((data)=>{
      //   console.log(data)
      // });


      this.authService.login(this.f['username'].value, this.f['password'].value).subscribe(
          (res) => {
            if (res) {
              setTimeout(() => {
                const role = this.authService.currentUserValue.role;
                if (role === Role.All || role === Role.Admin) {
                  this.router.navigate(['/admin/dashboard/main']);
                } else if (role === Role.Teacher) {
                  this.router.navigate(['/teacher/dashboard']);
                } else if (role === Role.Student) {
                  this.router.navigate(['/student/dashboard']);
                } else {
                  this.router.navigate(['/authentication/signin']);
                }
                this.spinnerButtonOptions.active = false;
              }, 1000);
            } else {
              this.error = 'Invalid Login';
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
          }
      );
    }
  }
  test(){
    console.log('working')
  }

}