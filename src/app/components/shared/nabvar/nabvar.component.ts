import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html'
})
export class NabvarComponent implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string): any{
    console.log(termino);
    this.route.navigate(['result', termino]);
  }

}
