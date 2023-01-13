import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectYourPlanComponent } from './select-your-plan/select-your-plan.component';
import { PickAddsOnComponent } from './pick-adds-on/pick-adds-on.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    SelectYourPlanComponent,
    PickAddsOnComponent,
    FinishingUpComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
