import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks = [
    { path: 'vocabulary', label: 'Словарь'},
    { path: 'praxis', label: 'Упражнения'},
    { path: 'setting', label: 'Настройки'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
