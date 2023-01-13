import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PickAddsOnComponent } from './pick-adds-on/pick-adds-on.component';
import { SelectYourPlanComponent } from './select-your-plan/select-your-plan.component';

const routes: Routes = [
  {path: '', component : PersonalInfoComponent},
  {path: 'personalInfo', component: PersonalInfoComponent},
  {path: 'pickAddsOn', component: PickAddsOnComponent},
  {path: 'selectYourPlan', component: SelectYourPlanComponent},
  {path: 'finishingUp', component: FinishingUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
