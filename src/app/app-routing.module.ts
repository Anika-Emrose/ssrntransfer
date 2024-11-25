// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookarideComponent } from './bookaride/bookaride.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InstallappComponent } from './installapp/installapp.component';
import { UserComponent } from './user/user.component';
import { ContentComponent } from './content/content.component';
import { AuthenticationComponent} from './authentication/authentication.component'





const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bookaride', component: BookarideComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'installapp', component: InstallappComponent},
    { path: 'user', component: UserComponent },
    { path: 'content', component: ContentComponent },
    { path: 'authentication', component: AuthenticationComponent},
    //{ path: 'update/:id', component: EditComponent},
    { path: '**', redirectTo: '' } // Redirect unknown paths to home
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
