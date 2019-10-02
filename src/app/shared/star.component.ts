import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'lm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating : number
  @Input() id : number
  
  width : number;

  ngOnChanges() : void{
    this.width = this.rating * 90/5;
  }

  @Output() childEvent: EventEmitter<string> = new EventEmitter<string>();

  onStarClick():void{
    this.childEvent.emit(`The house ${this.id} with rating ${this.rating} was clicked`);
  }


}
