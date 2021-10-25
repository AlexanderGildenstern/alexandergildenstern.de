import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects = [
    { name: "sharkie", description: "Javascript based game", img: "http://alexandergildenstern.de/assets/img/Sharkie.PNG", href: "http://alexander-gildenstern.developerakademie.com/Sharkie/index.html", category: "javascript" },
    { name: "join", description: "Javascript based Kanban-Board", img: "http://alexandergildenstern.de/assets/img/AddTask.PNG", href: "http://alexander-gildenstern.developerakademie.com/Sharkie/index.html", category: "javascript" },
    { name: "Pokedex", description: "Javascript based Poke API", img: "http://alexandergildenstern.de/assets/img/pokedex.PNG", href: "http://alexander-gildenstern.developerakademie.com/PokeDex/indx.html", category: "javascript" },
    { name: "Lieferando", description: "Javascript based shopsite", img: "http://alexandergildenstern.de/assets/img/lieferando.PNG", href: "http://alexander-gildenstern.developerakademie.com/Lieferando/index.html", category: "javascript" },
    { name: "Kitchenlove-by-Anna", description: "Wordpress based with Woocommerce", img: "http://alexandergildenstern.de/assets/img/kitchnlove.PNG", href: "https://kitchenlove-by-anna.de", category: "wordpress" },
    { name: "Thermimadl", description: "Wordpress based with Woocommerce", img: "http://alexandergildenstern.de/assets/img/thermimadl.PNG", href: "https://thermimadl.com/", category: "wordpress" },
    { name: "Jana Steinzeit", description: "Wordpress based with Woocommerce", img: "http://alexandergildenstern.de/assets/img/steinzeit.PNG", href: "https://jana-steinzeit.de/", category: "wordpress" },
    { name: "My Homepage", description: "Angular Website", img: "http://alexandergildenstern.de/assets/img/myHomepage.PNG", href: "/", category: "angular" },
   
  ];

  categories!: any[];

  show(category: string) {
    if (category == 'all') {
      this.categories = this.projects;
    } else {
      this.categories = this.projects.filter(project => project.category == category);
    }

  }

  constructor() { }
  
  ngOnInit(): void {
    this.categories = this.projects;
  }

}
