import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fontSizePx = 10;

  title = 'Angular16App';
  display = false;

  onClick(){
    this.display = true;
  }

  canSave : boolean = true;
  isUnchanged : boolean = true;
  isSpecial: boolean = true;
  currentClasses : Record<string, boolean> = {};

  setCurrentClaaes(){
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged
    };
  }


}
