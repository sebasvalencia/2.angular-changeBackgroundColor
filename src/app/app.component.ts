import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Change Background Color';
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];

  changeBackgroundColor() {
    console.log('Color has been successfully changed!', );
    console.log('body: ', this.bodyTag);
    this.bodyTag.style.backgroundColor = 'green';
  }

}
