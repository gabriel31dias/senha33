import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { environment } from 'src/environments/environment'
import { AuthService } from './services/global/auth.service'
import { SpinnerService } from './services/global/spinner.service'
import { DynamicScriptLoaderService } from './services/global/dynamic-script-loader.service'
import { ISpinner } from './interfaces/global/ISpinner'
import { Title } from '@angular/platform-browser'
import { filter } from 'rxjs/operators'
import { TitleService } from './services/title.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: string = '';
  public spinner: ISpinner = { title: '', show: false }
  public version: string = '1.1.0';
  public currentYear: number = new Date().getFullYear();

  constructor (
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private sharedTitleService: TitleService,
    private auth: AuthService,
    private spinnerService: SpinnerService,
    private router: Router,
    private titleService: Title,
  ) {
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl('login')
    }

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setTitleBasedOnRoute();
      });
  }

  ngOnInit () {
    // Alterar título do app.html
    this.sharedTitleService.getTitle().subscribe(newTitle => {
      this.title = newTitle;
    });

    this.loadScripts()
    this.spinnerService.observeSpinner().subscribe(val => {
      this.spinner.show = val
      this.spinner.title = this.spinnerService.title
      if (!val) {
        this.spinner.title = ''
        this.spinnerService.title = ''
      }
    })
  }

  getRouteTitle(route: any): string {
    const title = route.data.title;
    if (title) {
      return title;
    } else if (route.firstChild) {
      return this.getRouteTitle(route.firstChild);
    }

    return 'Esocial';
  }

  // altera o texto da aba do navegador
  setTitleBasedOnRoute() {
    const currentRoute = this.router.routerState.snapshot.root;
    let title = 'Esocial';

    if (currentRoute.firstChild) {
      title = this.getRouteTitle(currentRoute.firstChild);
    }

    this.titleService.setTitle(title);
  }

  private loadScripts () {
    this.dynamicScriptLoader.load('menuheaderjs', 'menuheadercss', 'fontawesome')
      .then((data: any) => {
        console.log('LoadScripts complete', environment.production ? '' : data)
      })
      .catch((err: any) => {
        // Exibir erro para o usuário.
        console.log(err)
        // this.app.actionsForError(err)
      })
  }
}
