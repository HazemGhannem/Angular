import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourniseur',
  templateUrl: './fourniseur.component.html',
  styleUrls: ['./fourniseur.component.css']
})
export class FourniseurComponent implements OnInit {

  idFournisseur:Number = 105;
  code:String = 'A104B89';
  libelle:String = 'MyTeck';
  hide:boolean=false;

  Change(){
    this.hide=true
    console.log(this.hide)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
