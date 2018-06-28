import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements AfterViewInit {
  @ViewChild('vid') el: ElementRef;
  constructor() { }

  ngAfterViewInit() {
    // console.log(this.el.nativeElement.currentTime);
    // console.log(this.el);
    this.el.nativeElement.currentTime = 0;
    this.el.nativeElement.play();
  }
}

