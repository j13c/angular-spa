import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx: number;
  @Output() heroeTarget: EventEmitter<number>;

  constructor( private router: Router) {
    this.heroeTarget = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(): any{
    // console.log( this.idx);
    // this.router.navigate(['heroe', this.idx]);
    this.heroeTarget.emit( this.idx );
  }

}
