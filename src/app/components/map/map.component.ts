import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent {
  gamer = true;
  Iot = true;
  smartF = true;
  Medi = true;
  content: any;
  constructor() {
  }
  removeOption(indexValue){
    this.content = indexValue;
    console.log(indexValue);
    switch (indexValue.name) {
      case 'gamers':
        this.gamer = indexValue.value;
        break;
      case 'Iot':
        this.Iot = indexValue.value;
        break;
      case 'smartF':
        this.smartF = indexValue.value;
        break;
      case 'Medi':
        this.Medi = indexValue.value;
        break;
    }
  }
}
