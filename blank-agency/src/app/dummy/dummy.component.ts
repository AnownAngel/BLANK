import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  template: `
  <div class="wrapper">




  <div class="top-section">


    <video #vid autoplay muted loop>
      <source src="assets/vid.mp4" type="video/mp4">
      <source src="assets/vid.ogg" type="video/ogg"> Your browser does not support the video tag.
    </video>
    <div id="div">
      <h1>Tomorrow Is for the Taking</h1>
      <p>Thousands of classes to help you do your best work.</p>
      <a class="btn">Get Started for Free</a>
    </div>
    </div>
    <div class="next-section">
      <div style="color: black;" id="grid">
        <h2>Unlimited Access to over 22,000 classes</h2>
      </div>
      <div class="classes">
        <a>All Categories</a>
        <a>Design</a>
        <a>Business</a>
        <a>Technology</a>
        <a>Photography</a>
        <a>Entrepreneurship</a>
        <a>Film</a>
        <a>Writing</a>

      </div>
    </div>

  </div>
`,
  styleUrls: ['./dummy.component.css'],
  providers: []
})
export class DummyComponent implements AfterViewInit {
  @ViewChild('vid') private el: ElementRef;
  public users: string[];
  constructor() { }

  ngAfterViewInit() {
    // console.log(this.el.nativeElement.currentTime);
    // console.log(this.el);
    this.el.nativeElement.currentTime = 0;
    this.el.nativeElement.muted = true;
    this.el.nativeElement.play();
    this.el.nativeElement.loop = true;
    console.log(this.el.nativeElement.readyState);


  }

}



