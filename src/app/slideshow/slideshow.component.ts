import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['background.jpg', 'code.jpg', 'mac.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Born to code',
    'Graduatet at TUM'
  ];

  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateimage();
  }

  updateimage(){

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setInterval(() =>{
        this.showImage = true;
      },10);

    }, 8000)
  }

}
