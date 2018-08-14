import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './startpage.component.html',
  template: `
  <div class="wrapper">

    <div class="top-section">
      <video #vid autoplay muted>
        <source src="assets/vid.mp4" type="video/mp4">
        <source src="assets/vid.ogg" type="video/ogg">
        Your browser does not support the video tag.
      </video>
      <main id="toggle">
      <aside id="element2">
        <h1>Tomorrow Is for the Taking</h1>
        <p>Thousands of classes to help you do your best work.</p>
        <a class="btn">Get Started for Free</a>
      </aside>
    </main>
    </div>



  <div class="next-section">
    <div style="color: black;" id="grid">
      <h2>Unlimited Access to over 22,000 classes</h2>
    </div>
    <div>
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
   <button (click)="htmlInsideModal.open()">Raw HTML inside modal</button>
<modal #htmlInsideModal>
  <ng-template #modalHeader><h2>HTML inside modal</h2></ng-template>
  <ng-template #modalBody>
    <p>HTML content inside modal</p>
  </ng-template>
</modal>
  </div>
`,
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements AfterViewInit {
  @ViewChild('vid') private el: ElementRef;

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

