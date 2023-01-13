import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent {

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
}


// degrisage du bouton si le formulaire page 1 est rempli


affichageButton(){
  if(this.signInForm.valid === true){
    return false;
  }else{
    return true;
  }
}

// obligé de répéter affichage button car quand je met un paramètre pour récup l'url cela deconne, à modifier
// a modifier plus tard

affichageButtonRoute(){
  if(this.router?.url !== '/personalInfo'){
return false;
  }else{
    return true;
  }
}

affichageButtonRoute2(){
  if(this.router?.url !== '/selectYourPlan'){
return false;
  }else{
    return true;
  }
}

affichageButtonRoute3(){
  if(this.router?.url !== '/pickAddsOn'){
return false;
  }else{
    return true;
  }
}

affichageButtonRoute4(){
  if(this.router?.url !== '/finishingUp'){
return false;
  }else{
    return true;
  }
}




test(){
  console.log('bouton pas desactivé');
}

}
