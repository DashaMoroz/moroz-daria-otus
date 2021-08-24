import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../services/store.services';
import {TranslatorServices} from '../services/translator.services';

interface Word {
  word: string,
  id: string
}

@Component({
  selector: 'app-addword',
  templateUrl: './addword.component.html',
  styleUrls: ['./addword.component.css']
})

export class AddwordComponent implements OnInit {

  newWords: Word[];
  form: FormGroup;
  wordtranslet: string;
  vocabHideShow: string;

  constructor(private dateStore: StoreService,
              private dateTranslator: TranslatorServices) { }

  ngOnInit() {
    this.newWords = [];
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
    this.vocabHideShow = 'Показать словарь';
  }

  submit() {
    const {title} = this.form.value;
    this.addWord(this.form.value.title);
    this.form.reset(title);
    this.wordtranslet = '';
  }

  translation() {
    this.dateTranslator.get(this.form.value.title).subscribe(value => {
      this.wordtranslet = value.responseData.translatedText.toLowerCase();
    });
  }

  addWord(str) {
    const myData = {origin: str, completion: this.wordtranslet};
    this.dateStore.set(str, myData);
    this.showVocab();
    this.vocabHideShow = 'Скрыть словарь';
  }

  getVocab(key) {
    if (key !== 'settingsApp') {
      this.newWords.push({ word: this.dateStore.get(key).origin+' - '+this.dateStore.get(key).completion, id: key });
    }
  }

  showVocab() {
    this.newWords.length = 0;
    for (let i = 0; i < this.dateStore.len(); i++) {
      this.getVocab(this.dateStore.k(i));
    }
  }

  removeWord(str) {
    this.dateStore.del(str);
    this.showVocab();
  }

  hideVocab() {
    if (this.vocabHideShow === 'Скрыть словарь') {
        this.newWords.length = 0;
        this.vocabHideShow = 'Показать словарь';
    } else {
      this.showVocab();
      this.vocabHideShow = 'Скрыть словарь';
    }

  }

  delVocab() {
      this.dateStore.clear();
      this.showVocab();
  }

}
