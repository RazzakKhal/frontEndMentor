import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-your-plan',
  templateUrl: './select-your-plan.component.html',
  styleUrls: ['./select-your-plan.component.css']
})
export class SelectYourPlanComponent implements OnInit{
myDescription = "you have the option of monthly or yearly billing.";
affichagePlan = false;


ngOnInit(){
  this.affichagePlan = true;
}
}
