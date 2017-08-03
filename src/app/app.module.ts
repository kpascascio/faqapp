import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './conponents/navbar/navbar.component';
import { QuestionsListComponent } from './conponents/questions-list/questions-list.component';
import { DataService } from './services/data.service';
import { QuestionComponent } from './conponents/question/question.component';
import { AddQuestionComponent } from './conponents/add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionsListComponent,
    QuestionComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
