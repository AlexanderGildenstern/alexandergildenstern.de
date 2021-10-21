import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public router: Router) {  }  //public, kann jetzt auch aus dem html teil  constructor wird in Angular zum importiere benutzt.
                                              // public kann von überall geändert werden, router wird eingebunden

                                            
}