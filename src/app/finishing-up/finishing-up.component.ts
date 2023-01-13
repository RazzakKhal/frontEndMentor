import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.css']
})
export class FinishingUpComponent implements OnInit{
myDescription = "Double-check everything looks OK before confirming";

afficheMyFinish = false;

ngOnInit(){
  this.afficheMyFinish = true;
}
}
