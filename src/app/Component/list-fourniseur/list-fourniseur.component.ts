import { Component, OnInit } from '@angular/core';
import{Fournisseur} from '../../models/fournisseur'

@Component({
  selector: 'app-list-fourniseur',
  templateUrl: './list-fourniseur.component.html',
  styleUrls: ['./list-fourniseur.component.css']
})
export class ListFourniseurComponent implements OnInit {
  listForn :Fournisseur[]  = [new Fournisseur(1,"1ABC4522","hp"), 
  new Fournisseur(2,"2ABC4522","dell"), 
  new Fournisseur(3,"3ABC4522","lenovo"),
  new Fournisseur(400,"40ABC452","asus")]


 
   
    
 
  constructor() { }

  ngOnInit(): void {
    
  }

}
