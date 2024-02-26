import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any;
  
  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user);
        this.router.navigate(['/home']); // Navigate to '/home' route
      }
    });
  }
}
