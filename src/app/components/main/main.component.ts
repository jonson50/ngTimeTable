import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  sidebarActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onMenuButtonClick(event: Event) {
    this.sidebarActive = !this.sidebarActive;

    event.preventDefault();
  }
}
