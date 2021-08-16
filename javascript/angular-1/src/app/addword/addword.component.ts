import { Component, OnInit } from '@angular/core';
import {DateService} from '../services/date.sevices';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../services/store.services';
import {TranslatorServices} from '../services/translator.services';

@Component({
  selector: 'app-addword',
  templateUrl: './addword.component.html',
  styleUrls: ['./addword.component.css']
})
export class AddwordComponent implements OnInit {

  form: FormGroup;
  worttranslet: string;

  constructor(private dateService: DateService,
              private dateStore: StoreService,
              private dateTranslator: TranslatorServices) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }
  submit() {
    const {title} = this.form.value;
    console.log(this.form.value.title);
    this.addWord(this.form.value.title, this.form.value.title);
    this.showWord();
  }

  translation() {
    this.dateTranslator.get(this.form.value.title).subscribe(value => {
      this.worttranslet = value.responseData.translatedText;
    });
  }

  addWord(key, str) {
    const myData = {origin: str, completion: str};
    this.dateStore.set('VOCABULARY', myData);
  }

  showWord() {
    const myData = this.dateStore.get('VOCABULARY');
  }

}
