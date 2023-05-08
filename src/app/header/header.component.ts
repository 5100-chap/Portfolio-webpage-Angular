import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  //Variables
  today: Date = new Date();
  isHome: boolean = false;
  isContact: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  //Function
  ngOnInit(): void {
    setInterval(() => {
      this.today = new Date();
    }, 1000);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.activatedRoute.snapshot.firstChild;
      this.isHome = currentRoute?.routeConfig?.path === '';
      this.isContact = currentRoute?.routeConfig?.path === 'contact-me';
    });
  }

}
