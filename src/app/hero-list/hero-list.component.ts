import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent implements OnInit{
  hero: any[]
  query:string
  constructor(private hs: HeroService){
    this.query =''
    // const now = new Date();
    // const formattedTime = now.getFullYear() + '-' + 
    //                     (now.getMonth() + 1).toString().padStart(2, '0') + '-' + 
    //                     now.getDate().toString().padStart(2, '0') + 
    //                     '(' + now.getHours() % 12 + ':' + 
    //                     now.getMinutes().toString().padStart(2, '0') + 
    //                     (now.getHours() >= 12 ? 'pm' : 'am') + ')';
    this.hero =[]
    // this.hero =[
    //   {
    //     bname: 'Monster X',
    //     location:'Metrotown',
    //     reportedBy:'Agraj (236-666-6666)',
    //     time:formattedTime,
    //     imageLink:'',
    //     status:'OPEN',
    //     extraInfo:'He is smiling at children'
  
    //   },
    //   {
    //     bname: 'Demon K',
    //     location:'Burnaby',
    //     reportedBy:'Helix (612-666-6666)',
    //     time:formattedTime,
    //     imageLink:'',
    //     status:'OPEN',
    //     extraInfo:'He is playing with children'
  
    //   }
    // ]
  }
  ngOnInit(): void {
    this.hero = this.hs.get()
  }
  onHeroDelete(evt:{hero_bname:String}){
    let del_hero_name = evt.hero_bname;
    // this.hero =this.hero.filter((p:{bname:String }) => p.bname != del_hero_name)

    this.hero = this.hs.delete(del_hero_name) // invoking the service 
    // console.log(`Hero ${evt.hero_bname} just got deleted !` )
  }

}
