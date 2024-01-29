import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-hero-add-form',
  templateUrl: './hero-add-form.component.html',
  styleUrl: './hero-add-form.component.css'
})
export class HeroAddFormComponent{
  form: FormGroup
  constructor(private hs: HeroService, private router: Router){
   let formControls ={
      bname: new FormControl('', [
        Validators.minLength(4),
      ]),
      location:new FormControl,
      reportedBy: new FormControl('', [this.reporterValidator()]),
      time:new FormControl,
      status: new FormControl,
      extraInfo:new FormControl,
      imageLink: new FormControl,
    }
    this.form =new FormGroup(formControls)
    
  }

   reporterValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const validPattern = /^[a-zA-Z]+ \d{3}-\d{3}-\d{4}$/;
      const isValid = validPattern.test(control.value);
      return isValid ? null : { invalidReporter: true };
    };
  }
  onSubmit(newHero:any){
    // Set the status to 'OPEN' by default
    newHero.status = 'OPEN';
    this.hs.add(newHero)
    this.router.navigate(["/hero"])
    // console.log(newHero)
  }

}
