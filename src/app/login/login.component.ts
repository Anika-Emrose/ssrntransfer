import { Component } from '@angular/core';
import { apiService } from '../api.service'; // Import your service
import { Router } from '@angular/router';
@Component({
  selector: 'app-login', 
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private apiService: apiService,private router: Router) {}


  loginsession: any[] = [];
 onSubmit(LoginForm: any) {
    if (LoginForm.valid) {
      this.apiService.submitLoginForm(LoginForm.value).subscribe(
        response => {
           if(JSON.parse(JSON.stringify(response))['Status']==true){
       
             localStorage.setItem('user', JSON.stringify(response));
             this.router.navigate(['/user']);
           }
           else{
            alert(JSON.parse(JSON.stringify(response))['message']);
           }

        
           
         // LoginForm.reset(); // Reset the form after submission
        },
        error => {
          console.error('Error submitting form', error);
          alert('There was an error submitting the form. Please try again.');
        }
      );
    }
  }

}
