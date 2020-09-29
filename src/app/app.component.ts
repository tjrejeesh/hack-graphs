import { Component } from '@angular/core';
import {
  Router,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Event
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'telstraWebpageConcept';
  timer: any;
  loading: boolean;
  constructor(
    private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          clearTimeout(this.timer);
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.timer = setTimeout(
            (): void => {
              this.loading = false;
            },
            1000
          );
          break;
        }
        default: {
          break;
        }
      }
      window.scrollTo(0, 0);
    });

  }
};
