import { Component, Input } from '@angular/core';

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


}
