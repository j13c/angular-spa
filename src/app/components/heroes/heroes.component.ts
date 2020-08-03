import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService,
               private router: Router) {  }
  heroes: Heroe[] = [];
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }
  verHeroe(idx: number): any{
    this.router.navigate( ['heroe', idx]);
  }

}
