import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { BrowserUtils, InteractionStatus, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {
  title = 'ap1';
  isIframe = false;
  loginDisplay = true;
  private readonly _destroying$ = new Subject<void>();

  constructor(private router: Router, @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration, private broadcastService: MsalBroadcastService, private authService: MsalService, private http: HttpClient) { }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;
    this.broadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      })
  }

  login() {
    
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
        .subscribe({
          next: (result) => {
            console.log(result);
            this.setLoginDisplay();

            // Navigate to SidenavComponent after successful login
            this.router.navigate(['/']);
            // Redirect to SidenavComponent after successful login
            // this.authService.instance.setActiveAccount(result.account);
            // this.authService.instance.setRedirectHash('/sidenav');
            // BrowserUtils.runInIframe(() => {
            //   this.authService.instance.redirectRedirect();
            // });

          },
          error: (error) => console.log(error)
        });
    }
    else {
      this.authService.loginPopup()
        .subscribe({
          next: (result) => {
            console.log(result);
            this.setLoginDisplay();

            // Redirect to SidenavComponent after successful login
            // this.authService.instance.setActiveAccount(result.account);
            // this.authService.instance.setRedirectHash('/sidenav');
            // BrowserUtils.runInIframe(() => {
            //   this.authService.instance.redirectRedirect();
            // });
          },
          error: (error) => console.log(error)
        });
    }
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}

