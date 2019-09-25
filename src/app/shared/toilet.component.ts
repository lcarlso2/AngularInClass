import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'lm-toilet',
  templateUrl: './toilet.component.html',
  styleUrls: ['./toilet.component.css']
})
export class ToiletComponent implements OnChanges {

  @Input() count: number
  bathroomList = new Array().fill(this.count);

  // constructor(){
  //   this.bathroomList = Array().fill(this.count);
  // }

  
  width: number;

  ngOnChanges(): void {
    this.width = this.count * 10.5;
    this.bathroomList = new Array(Math.ceil(this.count)).fill(0);
  }




}
