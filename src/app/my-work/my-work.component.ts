import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects = [
    { name: "sharkie", description: "Javascript based game", img: "https://alexandergildenstern.de/assets/img/Sharkie.png", href: "http://alexander-gildenstern.developerakademie.com/Sharkie/index.html", category: "javascript" },
    { name: "join", description: "Javascript based Kanban-Board", img: "https://alexandergildenstern.de/assets/img/AddTask.PNG", href: "http://gruppe-100.developerakademie.com/addTask.html", category: "javascript" },
    { name: "Pokedex", description: "Javascript based Poke API", img: "https://alexandergildenstern.de/assets/img/pokedex.png", href: "http://alexander-gildenstern.developerakademie.com/PokeDex/indx.html", category: "javascript" },
    { name: "Lieferando", description: "Javascript based shopsite", img: "https://alexandergildenstern.de/assets/img/lieferando.png", href: "http://alexander-gildenstern.developerakademie.com/Lieferando/index.html", category: "javascript" },
    { name: "Kitchenlove-by-Anna", description: "Wordpress based with Woocommerce", img: "https://alexandergildenstern.de/assets/img/kitchenlove.png", href: "https://kitchenlove-by-anna.de", category: "wordpress" },
    { name: "Thermimadl", description: "Wordpress based with Woocommerce", img: "https://alexandergildenstern.de/assets/img/thermimadl.png", href: "https://thermimadl.com/", category: "wordpress" },
    { name: "Jana Steinzeit", description: "Wordpress based with Woocommerce", img: "https://alexandergildenstern.de/assets/img/steinzeit.png", href: "https://jana-steinzeit.de/", category: "wordpress" },
    { name: "My Homepage", description: "Angular Website", img: "https://alexandergildenstern.de/assets/img/myHomepage.png", href: "/", category: "angular" },
   
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
