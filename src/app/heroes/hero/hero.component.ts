import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman"
  public age: number = 45

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHeroName(value:string):void {
    this.name = value
  }

  changeHeroAge(value:number):void {
    this.age = value
  }

  resetHero():void {
    this.name = 'ironman'
    this.age = 45
  }

}