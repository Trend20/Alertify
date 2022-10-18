import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeroComponent } from './hero/hero.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    PricingComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HeroComponent,
    TestimoniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
