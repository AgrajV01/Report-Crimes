import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-hero]',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() hero:any
  @Output() delete = new EventEmitter
  constructor(private router: Router){
  // const now = new Date();
  // const formattedTime = now.getFullYear() + '-' + 
  //                       (now.getMonth() + 1).toString().padStart(2, '0') + '-' + 
  //                       now.getDate().toString().padStart(2, '0') + 
  //                       '(' + now.getHours() % 12 + ':' + 
  //                       now.getMinutes().toString().padStart(2, '0') + 
  //                       (now.getHours() >= 12 ? 'pm' : 'am') + ')';
  //   this.hero= {
  //     bname: 'Monster X',
  //     location:'Metrotown',
  //     reportedBy:'Agraj (236-666-6666)',
  //     time:formattedTime,
  //     status:'OPEN',
  //     extraInfo:'He is smiling at children'

    // }
    // {
    //   bname: 'Demon K',
    //   location:'Burnaby',
    //   reportedBy:'Helix (612-666-6666)',
    //   time:formattedTime,
    //   status:'OPEN',
    //   extraInfo:'He is playing with children'

    // }

  }

  // onView(){
  //   this.router.navigate(["/person",this.hero.bname])
  // }
  onDelete(evt:any, hero_del:String){
    // create an event object
    evt["hero_bname"]= hero_del
    // console.log(evt)
    this.delete.emit(evt)

  }
  onView(){
    this.router.navigate(["/hero",this.hero.bname])
  }
}
