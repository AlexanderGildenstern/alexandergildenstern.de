import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScrollToService } from '../scroll-to.service';

@Component({
  selector: 'app-main-start',
  templateUrl: './main-start.component.html',
  styleUrls: ['./main-start.component.scss']
})
export class MainStartComponent implements OnInit {

  @Output() scrollTo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  

}
