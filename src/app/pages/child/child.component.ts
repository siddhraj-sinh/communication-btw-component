import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() listOfItems?:string[];
  
  @Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();
  removeItem(i:number){
   this.deleteItem.emit(i);
  }
}
