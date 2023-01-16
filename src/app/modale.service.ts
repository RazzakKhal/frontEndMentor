import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModaleService {
 private name = "";
 private email="";
 private phoneNumber : any;
 private arcade = 0;
 private advanced = 0;
 private pro = 0;
 private onlineService = 0;
 private largerStorage = 0;
 private customizeProfile = 0;
 private total = 0;
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

getOnlineService(){
  return this.onlineService;
}

setOnlineService(value : number){
  this.onlineService = value;
}

getLargerStorage(){
  return this.largerStorage;
}

setLargerStorage(value : number){
this.largerStorage = value;
}

getCustomizeProfile(){
  return this.customizeProfile;
}

setCustomizeProfile(value : number){
  this.customizeProfile = value;
}

getTotal(){
  this.total = this.arcade + this.advanced + this.pro + this.onlineService + this.largerStorage + this.customizeProfile;
  return this.total;
}
}
