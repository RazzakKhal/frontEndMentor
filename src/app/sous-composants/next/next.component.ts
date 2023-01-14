import { Component, OnChanges, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit, OnChanges{

  router : Router | undefined;
  monlien : string | undefined;



constructor(router : Router){
this.router = router;



}

ngOnInit(): void {

// console.log(this.modale?.userName.valid);
}

ngOnChanges(): void {
}


// si j'arrive à récupérer aucun des texte en rouge alors j'active le bouton
affichageButton(){
  let test = document.querySelectorAll('.red');
  if(!test.length){
    return false
  }else{
    return true;
  }


}


// obligé de répéter affichage button car quand je met un paramètre pour récup l'url cela deconne, à modifier
// a modifier plus tard


affichageButtonRoute(){
  if(this.router?.url !== '/personalInfo'){
return false;
  } else{
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




}
