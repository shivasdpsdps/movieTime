import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';
@Component({
  selector: 'app-location',
//   host: {
//       '(document:click)': 'handleClick($event)',
//   },
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
      public elementRef;
      locationClickedInside : boolean =true;
      locationClickedOutside:boolean=true;
      iconClicked:boolean;
      pendingOrdersList:any;
      location:any;
      locationArray:string[]=['Bengaluru','Chandigarh','Delhi','Pune'];
   constructor(myElement: ElementRef) {
       this.elementRef = myElement;
   }

  ngOnInit() {
  }
  locationClicked(location:any) {
    this.location=location;
     sessionStorage.setItem('location',(this.location));
     window.location.reload();
  
    }

}  
 

