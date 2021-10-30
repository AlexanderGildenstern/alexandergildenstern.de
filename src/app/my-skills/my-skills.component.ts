import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ScrollToService } from '../scroll-to.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(scrollTo: ScrollToService) { }

  @ViewChild('target') target!: ElementRef;

  @Input() scrollTo!: boolean;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void{
    console.log(this.target.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void{

    // console.log(changes);
    // if(changes.scrollTo.currentValue){
    //   this.target.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    // }

  }
}


