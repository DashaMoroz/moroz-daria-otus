import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MomentPipe} from './services/moment.pipe';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {
  MatTabsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import { SettingsComponent } from './settings/settings.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { PraxisComponent } from './praxis/praxis.component';
import { AddwordComponent } from './addword/addword.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    VocabularyComponent,
    PraxisComponent,
    AddwordComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
