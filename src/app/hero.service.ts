import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  hero: any[]
  constructor() {
    // call to the backend DB
    const now = new Date();
    const formattedTime = now.getFullYear() + '-' + 
                        (now.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                        now.getDate().toString().padStart(2, '0') + 
                        '(' + now.getHours() % 12 + ':' + 
                        now.getMinutes().toString().padStart(2, '0') + 
                        (now.getHours() >= 12 ? 'pm' : 'am') + ')';
    this.hero =[
        {
          bname: 'Monster X',
          location:'Metrotown',
          reportedBy:'Agraj (236-666-6666)',
          time:formattedTime,
          imageLink:'https://www.kindpng.com/picc/m/113-1135083_demon-png-image-demon-png-transparent-png.png ',
          status:'OPEN',
          extraInfo:'He is smiling at children'
    
        },
        {
          bname: 'Demon K',
          location:'Burnaby',
          reportedBy:'Helix (612-666-6666)',
          time:formattedTime,
          imageLink:'https://www.kindpng.com/picc/m/3-34759_joaquin-phoenix-joker-png-photo-joker-2019-transparent.png',
          status:'OPEN',
          extraInfo:'He is playing with children'
    
        },
        {
          bname: 'Harley Quinn',
          location:'Vancouver',
          reportedBy:'Joker (999-999-9999)',
          time:formattedTime,
          imageLink:'https://www.kindpng.com/picc/m/50-504118_transparent-suicide-clipart-animated-harley-quinn-vs-margot.png',
          status:'OPEN',
          extraInfo:'She is Stealing the hearts of all Children!'
    
        }
      ]
  }
  get(){
    return this.hero
  }
  add(newHero:any){
    newHero.status = 'OPEN'
    this.hero.push(newHero)

    console.log(this.hero)
  }
  delete(del_person: String){
    this.hero = this.hero.filter(p => p.bname != del_person)
    return this.hero
  }
  // can have edit person or any otehr additional functuions 
}
