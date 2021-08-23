import { Component, OnInit } from '@angular/core';
import {StoreService} from '../services/store.services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  languages = [
    'Английский',
    'Итальянский'
  ];

  levels = [
    '5',
    '10'
  ];

  times = [
    '1',
    '3',
    '5'
  ];

  selectedLanguage: String = 'Английский';

  selectedLevel: String = '5';

  selectedTime: String = '1';

  constructor(private dateStore: StoreService) { }

  ngOnInit() {
  }
  setSettings() {
    const myData = {language: this.selectedLanguage, level: this.selectedLevel, time: this.selectedTime};
    this.dateStore.set('settingsApp', myData);
    console.log(localStorage);
  }

}
