import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rc';
  user = {name:"puneeth",email:"abc@gmail.com"};
  onSubmit(){
    console.log("User data submitted!!",this.user);
  }
}
