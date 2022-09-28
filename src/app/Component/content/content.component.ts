import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  dodo:any
  color:String = "green"
  j:any=0
  DeleteUser (id:any ){
    this.User.splice(id-1,1)
  }

  show (id:any){
    this.j=id
   this.dodo= this.User[id]
  }

  searchText:any;
  User= [
  {
  idCustomer: 1,
  firstName: "Milaa",
  lastName: " Kunis",
  birthDate: "1999-06-30",
  accountCategory: "Admin",
  email: "mila@kunis.com",
  password: "test",
  picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
  profession: "Software Engineer"
  },
  {
  idCustomer: 2,
  firstName: "George",
  lastName: "Clooney",
  birthDate: "1999-06-30",
  accountCategory: "Customer",
  email: "marlon@brando.com",
  password: "test",
  picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
  profession: "Software Engineer"
  },
  {
  idCustomer: 3,
  firstName: "George",
  lastName: "Clooney",
  birthDate: "1999-06-30",
  accountCategory: "Customer",
  email: "marlon@brando.com",
  password: "test",
  picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
  profession: "Software Engineer"
  },
  {
  idCustomer: 4,
  firstName: "Ryan",
  lastName: "Gossling",
  birthDate:"1999-06-30",
  accountCategory: "Golden",
  email: "Ryan@nicholson.com",
  password: "test",
  picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
  profession: "Software Engineer"
  },
  {
  idCustomer: 5,
  firstName: "Robert",
  lastName: "Downey",
  birthDate: "1999-06-30",
  accountCategory: "Blocked Account",
  email: "robert@nicholson.com",
  password: "test",
  picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
  profession: "Software Engineer"
  }
  ]

    Msg(): void {
      console.log('First Msg')
      this.color="blue"
    }
    constructor() { }

    ngOnInit(): void {
    }

  }
