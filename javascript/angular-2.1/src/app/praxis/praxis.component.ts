import { Component, OnInit } from '@angular/core';
import {StoreService} from '../services/store.services';
import {FormControl, FormGroup, Validators} from '@angular/forms';

interface Word {
  origin: string,
  completion: string
}

@Component({
  selector: 'app-praxis',
  templateUrl: './praxis.component.html',
  styleUrls: ['./praxis.component.css']
})
export class PraxisComponent implements OnInit {

  wordList: Word[];
  currentWord: Word;
  wordOrigin: string;
  disableButStart: boolean;
  disableButAnswer: boolean;
  disableButStop: boolean;
  countWord: number;
  result: number;
  resultMessage: string;
  level: number;
  timerId: number;

  form: FormGroup;

  constructor(private dateStore: StoreService) { }

  ngOnInit() {
    this.form = new FormGroup({
      userAnswer: new FormControl('', Validators.required)
    });
    this.setSetting();
  }

  setSetting() {
    this.result = 0;
    this.countWord = 0;
    this.wordList = [];
    this.disableButStart = false;
    this.disableButAnswer = true;
    this.disableButStop = true;
    this.resultMessage = 'нет';
    this.getwordList();

    this.wordOrigin = '';
    this.form.value.userAnswer = '';
  }

  setTime() {
    let time: string;
    let second: number;
    if (this.dateStore.get('settingsApp')) {
      time = this.dateStore.get('settingsApp').time;
    } else {
      time = '1';
    }
    switch (time) {
      case '1': second = 60000; break;
      case '3': second = 180000; break;
      case '5': second = 300000; break;
    }
    this.timerId = setTimeout(this.break.bind(this), second);
  }

  start() {
    if (!this.getRandomWord()) {
       this.setSetting();
       this.resultMessage = 'словарь пуст';
    } else {
      if (this.dateStore.get('settingsApp')) {
        this.level = this.dateStore.get('settingsApp').level;
      } else {
        this.level = 5;
      }
      this.disableButStart = true;
      this.disableButAnswer = false;
      this.disableButStop = false;
      this.currentWord = this.getRandomWord();
      this.wordOrigin = this.currentWord.origin;
      this.setTime();
    }
  }

  stop() {
    this.setSetting();
  }
  break() {
    this.setSetting();
    this.resultMessage = 'время вышло, начните заново';
  }

  nextWord() {
    this.countWord++;

    if (this.form && this.form.value.userAnswer === this.currentWord.completion) {
      this.result++;
    }

    if (this.countWord >= this.level || this.wordList.length <= 0) {
        clearTimeout(this.timerId);
        this.disableButStart = true;
        this.disableButAnswer = true;
        this.disableButStop = false;
        this.resultMessage = `Ваш результат ${this.result} из ${this.countWord}`;
    } else {
      this.currentWord = this.getRandomWord();
      this.wordOrigin = this.currentWord.origin;
    }

    this.form.value.userAnswer = '';
  }

  getRandomWord() {
    const index = Math.floor(Math.random() * this.wordList.length);
    const elem = this.wordList[index];
    this.wordList.splice(index, 1);
    return elem;
  }

  getWord(key) {
    if (this.dateStore.get(key).origin) {
      this.wordList.push({origin: this.dateStore.get(key).origin, completion: this.dateStore.get(key).completion});
    }
  }

  getwordList() {
    for (let i = 0; i < this.dateStore.len(); i++) {
      this.getWord(this.dateStore.k(i));
    }
  }

}
