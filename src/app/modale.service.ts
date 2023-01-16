import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModaleService {
  name = "";
  email="";
  phoneNumber : any;
arcade = 0;
advanced = 0;
pro = 0;
onlineService = 0;
largerStorage = 0;
customizeProfile = 0;
total = 0;
  constructor() { }

setArcade(value : number){
this.arcade = value;
}

setAdvanced(value : number){
  this.advanced = value;
}

setPro(value : number){
  this.pro = value;
}

setOnlineService(value : number){
  this.onlineService = value;
}

setLargerStorage(value : number){
this.largerStorage = value;
}

setCustomizeProfile(value : number){
  this.customizeProfile = value;
}

getTotal(){
  this.total = this.arcade + this.advanced + this.pro + this.onlineService + this.largerStorage + this.customizeProfile;
  return this.total;
}
}
