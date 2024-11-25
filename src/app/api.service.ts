import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class apiService {
  private apiUrl = 'http://localhost/ssrntransfer/'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  submitContactForm(data: any): Observable<any> {
   // console.log(data);
    return this.http.post(this.apiUrl+'/contact.php', data);
  }
  submitUserForm(data: any): Observable<any> {
    // console.log(data);
     return this.http.post(this.apiUrl+'/user.php', data);
   }

   getUserList(): Observable<any> {
    // console.log(data);
     return this.http.get(this.apiUrl+'/getuser.php');
   }
   getContentList(): Observable<any> {
    // console.log(data);
     return this.http.get(this.apiUrl+'/getcontent.php');
   }
   submitLoginForm(data: any): Observable<any> {
    // console.log(data);
     return this.http.post(this.apiUrl+'/Login.php', data);
   }

  submitContentForm(data: any): Observable<any> {
    // console.log(data);
    return this.http.post(this.apiUrl+'/content.php', data);
  }

  submitRegisterForm(data: any): Observable<any>{
    return this.http.post(this.apiUrl+'user.php', data);
  }

}
