import { Component } from '@angular/core';
import { apiService } from '../api.service'; // Import your service

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  constructor(private apiService: apiService) {}

  contents: any[] = [];
  errorMessage: string | null = null;
  ngOnInit(): void {
    this.apiService.getContentList().subscribe({
      next: (data) => {
        this.contents = data;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching user data';
        console.error(error);
      }
    });
  }

  onSubmit(userForm: any) {
    if (userForm.valid) {
      this.apiService.submitContentForm(userForm.value).subscribe(
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
