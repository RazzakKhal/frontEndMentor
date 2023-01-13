import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-adds-on',
  templateUrl: './pick-adds-on.component.html',
  styleUrls: ['./pick-adds-on.component.css']
})
export class PickAddsOnComponent implements OnInit{

  myDescription = "Adds-on help enhance your gaming experience";
afficheMyAdd = false;

  ngOnInit(){
    this.afficheMyAdd = true;
  }


}
