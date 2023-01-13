import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit{

  router : Router | undefined;
  monlien : string | undefined;
@Input() disabled : boolean | undefined;


constructor(router : Router){
this.router = router;
}

ngOnInit(): void {
  this.disabled = !this.disabled;
console.log(this.disabled);
}





}
