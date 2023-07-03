import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise1';
  items:string[] = ["item1","item2","item3"];

  removeItem($event:number){
    this.items.splice($event,1);
    window.alert('this item will be deleted, are you sure?')
  }
}
