import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itgiLink: string="https://itgi.getvisitapp.net/sso?userParams=kdRDkaQXGejyMZrFaX%2FMraWZoXzqXQr3u6HEsC%2BMuX4OOZSjH%2BKOYbC9NKcQTKVkboq2QhRpDLq4LxhpJC%2Frr4%2Bo5rQojgwC7JzKIR4MJr6mrF%2BKxwSm2jG7HrPRod7Z%2Bya8DCcyz%2F18aMfFxX7bWfH7uXKds3E%2FehfDmesVXuBH6acG%2B5TL8ksXHJmKBWhCQzKCJmhC5%2FtoObXYlLqhL3MEwcE7XrMNQywpgwvUzSNVsNfYuXD3Wd6Fq1ip8zAhHRDSptO4i3QrlsbBQZdlYSOi3LOlpglVIAkr1DCZENLsKzxzKS4vTY9HBKP%2B1AdO0Vv9JOlrCgm2maqNsIVkpQXsm1SZ4iWjIlmMr98fO31gnzIVC7F%2B8rC4aDWGQm%2FM&clientId=itgi-sdk-012";


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
