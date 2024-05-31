import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

   @Input() size! : number | string;
  @Output() sizeChange = new EventEmitter<number>();


   birthday = new Date(Date.now());

  dec(){
    this.resize(-1);
  }

  inc(){
    this.resize(+1);
  }

  resize(delte: number){
    this.size = Math.min(40, Math.max(8, + this.size + delte));
    this.sizeChange.emit(this.size);
  }


}
