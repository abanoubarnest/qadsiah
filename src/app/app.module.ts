import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./modules/auth/auth.module";
import { httpInterceptorProviders } from "./core/interceptors/interceptors.providers";
import { AppRoutingModule } from "./app-routing.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    AuthModule.forRoot(),
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
