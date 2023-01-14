import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';


@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {

  @Input() title : string | undefined;
  @Input() description : string | undefined;
  @Input() afficheForm : boolean | undefined;
  @Input() affichePlan : boolean | undefined;
  @Input() afficheAdd : boolean | undefined;
  @Input() afficheFinish: boolean | undefined;

signInForm : FormGroup;
userName : FormControl;
userMail : FormControl;
userPhone : FormControl;
router : Router | undefined;
buttonProfil = true;
arcade = false;
advanced = false;
pro = false;
signInValid : boolean;


constructor(formBuilder : FormBuilder, router: Router){

  this.userName = formBuilder.control('', [Validators.required]);
  this.userMail = formBuilder.control('', [Validators.required, Validators.email]);
  this.userPhone = formBuilder.control('', [Validators.required]);
this.signInForm = formBuilder.group({
  email : this.userMail,
  name: this.userName,
  phone : this.userPhone
});
this.router = router;
this.signInValid = this.signInForm.valid;
}

// méthode pour récupérer l'etat du formulaire dans mon composant next

getEtat(){
  return of(this.signInForm.valid);
}


ngOnInit(): void {

}

// si je choisi arcade alors sa valeur est à true et les autres à false

// // si je choisi advanced alors sa valeur est à true et les autres à false

// si je choisi pro alors sa valeur est à true et les autres à false

}
