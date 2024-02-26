import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: any;
  
  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user);
        this.router.navigate(['/message']); // Navigate to '/home' route
      }
    });
  }
}
