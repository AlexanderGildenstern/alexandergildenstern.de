import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;   // Annotation, Variable kann von ausserhalb angesprochen werden

  constructor() { }

  ngOnInit(): void {
  }

}
