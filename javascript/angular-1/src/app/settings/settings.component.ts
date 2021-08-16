import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  languages = [
    'Английский',
    'Русский'
  ];

  levels = [
    '5',
    '10'
  ];

  selectedLanguage: String = 'Английский';

  selectedLevel: String = '5';

  constructor() { }

  ngOnInit() {
  }

}
