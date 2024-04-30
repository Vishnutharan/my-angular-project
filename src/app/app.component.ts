import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { FakeApiServiceService } from './fake-api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, AppRoutingModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent implements OnInit {

  datas: any; // Add this line

  constructor(private dataService: FakeApiServiceService) { }


  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.datas = data.map(item => item.name); // Extract the 'name' property from each item
    });
  }
}
