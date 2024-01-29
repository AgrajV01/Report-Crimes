// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-hero-view',
//   templateUrl: './hero-view.component.html',
//   styleUrl: './hero-view.component.css'
// })
// export class HeroViewComponent {
//   pname:string = this.ActivatedRoute.snapshot.params['name']
//   constructor(private ActivatedRoute:ActivatedRoute){

//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.css']
})
export class HeroViewComponent implements OnInit {
  bname: String | undefined;
  hero: any; // Replace 'any' with the appropriate type for your data

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService) {}

  ngOnInit() {
    this.bname = this.activatedRoute.snapshot.params['name'];
    this.getHeroDetails(this.bname);
  }

  getHeroDetails(name: String | undefined) {
    const heroes = this.heroService.get();
    this.hero = heroes.find(hero => hero.bname === name);

    if (!this.hero) {
      console.error('Hero not found:', name);
      // Handle the case when the hero is not found
    }
  }
}
