import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  Iot = true;
  smartF = true;
  Medi = true;
  smartH = true;
  gamersValue = true;

  constructor() { }
  saveUsername: any;

  @Output()
  removeOption = new EventEmitter<any>();
  ngOnInit(): void {
  }
  checkChange(value: any, name){
    if (name === 'gamers') {
      this.gamersValue = !this.gamersValue;
      const content = {value: this.gamersValue, name};
      this.removeOption.emit(content);
    }
    if (name === 'Iot') {
      this.Iot = !this.Iot;
      const content = {value: this.Iot, name};
      this.removeOption.emit(content);
    }
    if (name === 'smartF') {
      this.smartF = !this.smartF;
      const content = {value: this.smartF, name};
      this.removeOption.emit(content);
    }
    if (name === 'Medi') {
      this.Medi = !this.Medi;
      const content = {value: this.Medi, name};
      this.removeOption.emit(content);
    }
    if (name === 'smartH') {
      this.smartH = !this.smartH;
      const content = {value: this.smartH, name};
      this.removeOption.emit(content);
    }
  }
}
