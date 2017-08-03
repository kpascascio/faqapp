import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class DataService {
  questions: Question[];
  constructor() {

  }

  // get questions from localstroage
  getQuestions() {
    if (localStorage.getItem('questions') == null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  addQuestion(question: Question) {
    // this.questions.unshift(question);

    // Init local variable
    let questions;

    if (localStorage.getItem('questions') == null) {
      questions = [];
      // Add question to the array
      questions.unshift(question);

      // add the question to the local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      // if ther is something in the local storage, we want to add it to the
      // local questions variable
      questions = JSON.parse(localStorage.getItem('questions'));

      this.questions.unshift(question);

      localStorage.setItem('questions', JSON.stringify(questions));
      // this.questions = JSON.parse(localStorage.getItem('questions'));
    }
  }

  removeQuestion(question: Question) {
    this.questions.forEach((value, key) => {
      if (value.text === question.text) {
        this.questions.splice(key, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    });
  }
}
