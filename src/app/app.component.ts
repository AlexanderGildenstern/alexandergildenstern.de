import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['background.jpg', 'code.jpg', 'mac.jpg'];
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
