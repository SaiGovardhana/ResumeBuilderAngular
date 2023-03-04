import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  appName="ResumeToGo"
  loggedInNavs=["Create Resume","My Resumes","Dashboard"]
  loggedOutNavs=["Sign In","Sign Up"]
  constructor(public authStore:AuthService)
  {

  }
}
