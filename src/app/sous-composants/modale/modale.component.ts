import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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


constructor(formBuilder : FormBuilder){

  this.userName = formBuilder.control('', [Validators.required]);
  this.userMail = formBuilder.control('', [Validators.required, Validators.email]);
  this.userPhone = formBuilder.control('', [Validators.required]);
this.signInForm = formBuilder.group({
  email : this.userMail,
  name: this.userName,
  phone : this.userPhone
});
}

affichageButton(){
  if(this.signInForm.valid === true){
    return false;
  }else{
    return true;
  }
}

test(){
  console.log('bouton pas desactivé');
}

}
