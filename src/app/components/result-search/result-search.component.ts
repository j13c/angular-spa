import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.services';
// import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
})
export class ResultSearchComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private _heroesService: HeroesService )
  {
      this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes  = this._heroesService.searchHeroe( params['termino']);
      console.log(this.heroes);
    });
  }

  ngOnInit(): void {
  }

  verHeroe(idx: number): any{
    this.router.navigate( ['heroe', idx]);
  }

}
