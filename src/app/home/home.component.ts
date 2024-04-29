import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'my-angular-project';
  Name:string = "vishnutharan";
  imageUrl: string = "https://picsum.photos/seed/picsum/200/300";

  getName() {
    return "vishnu";
  }
  onClick(): void {
    alert("button clicked!");
  }
}
