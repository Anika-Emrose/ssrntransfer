import { Component } from '@angular/core';
import { apiService } from '../api.service'; // Import your service
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private apiService: apiService,private router: Router) {}


  loginsession: any[] = [];
 onSubmit(RegisterForm: any) {
    if (RegisterForm.valid) {
      this.apiService.submitRegisterForm(RegisterForm.value).subscribe(
        response => {
           if(JSON.parse(JSON.stringify(response))['Status']==true){
       
             //localStorage.setItem('user', JSON.stringify(response));
             //this.router.navigate(['/login']);
           }
           else{
            alert(JSON.parse(JSON.stringify(response))['message']);
            this.router.navigate(['/login']);
           }

        
           
         // LoginForm.reset(); // Reset the form after submission
        },
        error => {
          console.error('Error submitting form', error);
          alert('There was an error submitting the form. Please try again. '+error);
        }
      );
    }
  } 
}
