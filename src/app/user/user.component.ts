import { Component } from '@angular/core';
import { apiService } from '../api.service'; // Import your service
@Component({
  selector: 'app-user',

  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(private apiService: apiService) {}
  users: any[] = [];
  errorMessage: string | null = null;
  ngOnInit(): void {
    this.apiService.getUserList().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching user data';
        console.error(error);
      }
    });
  }

  
  onSubmit(userForm: any) {
     if (userForm.valid) {
       this.apiService.submitUserForm(userForm.value).subscribe(
         response => {
           console.log('Form submitted successfully!', response);
           alert('Form submitted successfully!');
           userForm.reset(); // Reset the form after submission
           this.ngOnInit();
         },
         error => {
           console.error('Error submitting form', error);
           alert('There was an error submitting the form. Please try again.');
         }
       );
     }
   }
}
