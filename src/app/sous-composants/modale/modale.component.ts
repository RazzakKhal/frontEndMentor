import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModaleService } from '../../modale.service';
import { Router } from '@angular/router';
import { cp } from 'fs';
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
monthly = true;
arcadePrice = 9;
advancedPrice = 12;
proPrice = 15;
arcadeSelected = false;
advancedSelected = false;
proSelected = false;
onlineService = false;
largerStorage = false;
customizeProfile = false;
modaleService : ModaleService;
total = 0;


constructor(formBuilder : FormBuilder, router: Router, modaleService : ModaleService){

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
this.modaleService = modaleService;
}

// méthode pour récupérer l'etat du formulaire dans mon composant next

getEtat(){
  return of(this.signInForm.valid);
}


ngOnInit(): void {
this.total = this.modaleService.getTotal();
}

changeMonthly(){
  this.monthly = !this.monthly;
  this.changePrice();
}

changePrice(){
  if(this.monthly){
    this.arcadePrice = 9;
    this.advancedPrice = 12;
    this.proPrice = 15;
  }else{
    this.arcadePrice = 90;
    this.advancedPrice = 120;
    this.proPrice = 150;
  }
}

changeArcadeSelected(){
  this.arcadeSelected = true;
  this.advancedSelected = false;
  this.proSelected = false;
  this.modaleService.setArcade(this.arcadePrice);
  this.modaleService.setAdvanced(0);
  this.modaleService.setPro(0);
}



changeAdvancedSelected(){
  this.arcadeSelected = false;
  this.advancedSelected = true;
  this.proSelected = false;
  this.modaleService.setAdvanced(this.advancedPrice);
  this.modaleService.setPro(0);
  this.modaleService.setArcade(0);
}

changeProSelected(){
  this.arcadeSelected = false;
  this.advancedSelected = false;
  this.proSelected = true;
  this.modaleService.setPro(this.proPrice);
  this.modaleService.setArcade(0);
  this.modaleService.setAdvanced(0);
}


// méthodes qui vérifient les options checked et ajoutent les valeur au total
pickAddCheck1(){
    this.onlineService = !this.onlineService;
    if(this.onlineService){
      this.modaleService.setOnlineService(1);
    }else{
      this.modaleService.setOnlineService(0);
    }
}

pickAddCheck2(){
  this.largerStorage = !this.largerStorage;
  if(this.largerStorage){
    this.modaleService.setLargerStorage(2);
  }else{
    this.modaleService.setLargerStorage(0);
  }
}

pickAddCheck3(){
  this.customizeProfile = !this.customizeProfile;
  if(this.customizeProfile){
    this.modaleService.setCustomizeProfile(2);
  }else{
    this.modaleService.setCustomizeProfile(0);
  }


}

}
