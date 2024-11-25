// Angular Import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; // For HTTP requests

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookarideComponent } from './bookaride/bookaride.component';
import { ServicesComponent } from './services/services.component';
import { InstallappComponent } from './installapp/installapp.component';
import { BlogComponent } from './blog/blog.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from'./register/register.component';
import {UserComponent} from './user/user.component';
import {ContentComponent} from './content/content.component';





@NgModule({
  declarations: [
   AppComponent,
   HomeComponent,
   UserComponent,
   LoginComponent,
   ContentComponent,
   RegisterComponent,
   BookarideComponent,
   ServicesComponent,
   InstallappComponent,
   BlogComponent,


   
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
