import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl:'./rating.component.html' 
})
export class RatingComponent {
//   range: Array<number> = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  @Input() rate: number;
  temp:string;
  firstNumber:any;
  halfStarFlag:boolean;
  emptyCount:any;
  starImg:string="assets/images/star.PNG";
  halfStarImg:string="assets/images/starHalf.PNG";
  emptyStarImg:string="assets/images/starEmpty.PNG";
  ngDoCheck(){
    this.temp=JSON.stringify(this.rate);
    this.firstNumber=this.temp.slice(0,1);
    if(this.rate>this.firstNumber){
      this.halfStarFlag=true;
    }
    this.emptyCount = 5-this.rate;
    this.emptyCount=JSON.stringify(this.emptyCount);
    this.emptyCount=this.emptyCount.slice(0,1);
}
}

