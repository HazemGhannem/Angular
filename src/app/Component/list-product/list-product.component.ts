import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product'

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listproduct :Product[]=[new Product(1,"P147852P","Product1",12.5,0.02),
  new Product(2,"P147852P","Product1",30,0.1980),
  new Product(3,"D14785CC","Product1",20,0.1980),
  new Product(4,"E147852P","Product1",50,0.1980),
  new Product(5,"F147852P","Product1",70,0.02)]

  data:any
  msg:any
  con:any
  id:any
  code:any
  libelle:any
  prixUnitaire:any
  tauxTVA:any
  reset(){
    this.id='',
    this.code='',
    this.libelle='',
    this.prixUnitaire='',
    this.tauxTVA=''
  }
  add(){
    this.listproduct.push(new Product(this.id,this.code,this.libelle,this.prixUnitaire,this.tauxTVA))
  }
  
  Modif(id:any ){
    this.listproduct.map(item =>{
      if (item.tauxTVA !== 0.02){
        this.con=id-1
        console.log(this.con +" ==="+id)
        this.listproduct[id-1].tauxTVA = 0.02
        this.msg="TVA modifiée"
      }
    })

  }

  constructor() { }

  ngOnInit(): void {
  }

}
