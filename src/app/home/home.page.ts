import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itgiLink: string="https://itgi.getvisitapp.xyz/sso?userParams=kdRDkaQXGejyMZrFaX%2FMraWZoXzqXQr3u6HEsC%2BMuX4OOZSjH%2BKOYbC9NKcQTKVkboq2QhRpDLq4LxhpJC%2Frr4%2Bo5rQojgwC7JzKIR4MJr6mrF%2BKxwSm2jG7HrPRod7Z%2Bya8DCcyz%2F18aMfFxX7bWfH7uXKds3E%2FExtEMcZAJhKqIJ%2FUypD0zPbRn1IlgHJIqXDBYYOLb5pHe1Pn85LQ2TOEj8UE5zrJzNIxbZFs0e8xVarmQYnKrDUWH%2BmaZ4dQr1hLzhqk0svtJhJifvzvjdwWisgQz8QJ%2Bv7hAmALQdZhWKlu%2FWAwz1XS7peecPc4E9T8y2ZwwhQJeBoZ4YS7dI4xcigz6U8t&clientId=itgi-sdk-012";


  constructor() {}

  openVisitApp(){

    console.log("ITGI Link: "+ this.itgiLink);

    if(this.itgiLink.length!=0){
      (<any>window).cordova.plugins.CordovaFitnessPlugin.open(
        [
         this.itgiLink,
         "967914547335-g2ntga70t1i7b19ti91gcubb7agm7rje.apps.googleusercontent.com",
      ]);
    }


   
  }   

  clearLink(){
    this.itgiLink=""
    
  }
}
