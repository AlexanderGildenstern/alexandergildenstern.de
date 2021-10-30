import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  scroll = false;
  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(){
    this.scroll = true;
    setTimeout(()=> this.scroll = false, 500);
  }

}
