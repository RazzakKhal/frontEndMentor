import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit{

  myDescription="Please provide your name, email adress, and phone number.";
affichageForm = false;
 ngOnInit(){
this.affichageForm = true;
 }
}
