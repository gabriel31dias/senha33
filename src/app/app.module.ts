import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  DatePipe,
  HashLocationStrategy,
  LocationStrategy,
} from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./pages/public/page-not-found/page-not-found.component";
import { GlobalErrorHandler } from "./guards/global-error-handler";
import { ProgressSpinnerModule } from "primeng/progressspinner";
// import { MenuComponent } from "./angular-core-components/menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    // MenuComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProgressSpinnerModule,
  ],
  providers: [
    DatePipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
