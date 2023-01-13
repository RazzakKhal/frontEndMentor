import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { ModaleComponent } from './sous-composants/modale/modale.component';
import { NextComponent } from './sous-composants/next/next.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    SelectYourPlanComponent,
    PickAddsOnComponent,
    FinishingUpComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ModaleComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
