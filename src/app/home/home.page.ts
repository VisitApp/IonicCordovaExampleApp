import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  counter:number=0

  clickedImage: string="";

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  constructor(private camera: Camera) {}

  descriptionText="This is random Description" 

  increaseCounter(){
    this.counter=this.counter+1
  }


  captureImage() {


    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
      alert(err)
    });
  }

  addNumber(){
      (<any>window).cordova.plugins.CordavaFitnessPlugin.coolMethod([2,3],(data:any) => {
          console.log(data);
      });

  }

  openVisitApp(){
    (<any>window).cordova.plugins.CordovaFitnessPlugin.open(
      [
        "https://itgi.getvisitapp.xyz/sso?userParams=kdRDkaQXGejyMZrFaX%2FMraWZoXzqXQr3u6HEsC%2BMuX4OOZSjH%2BKOYbC9NKcQTKVkboq2QhRpDLq4LxhpJC%2Frr4%2Bo5rQojgwC7JzKIR4MJr6mrF%2BKxwSm2jG7HrPRod7Z%2Bya8DCcyz%2F18aMfFxX7bWfH7uXKds3E%2FExtEMcZAJhKqIJ%2FUypD0zPbRn1IlgHJIqXDBYYOLb5pHe1Pn85LQ2TOEj8UE5zrJzNIxbZFs0e8xVarmQYnKrDUWH%2BmaZ4dQr1hLzhqk0svtJhJifvzvjdwWisgQz8QJ%2Bv7hAmALQdZhWKlu%2FWAwz1XS7peecPc4E9T8y2ZwwhQJeBoZ4YS7dI4xcigz6U8t&clientId=itgi-sdk-012",
       "967914547335-g2ntga70t1i7b19ti91gcubb7agm7rje.apps.googleusercontent.com",
    ]);
     
    
}

 openNewActivity(){

  (<any>window).cordova.plugins.CordavaFitnessPlugin.new_activity([],(data:any) => {
    console.log(data);
 });
          
        
}


}
