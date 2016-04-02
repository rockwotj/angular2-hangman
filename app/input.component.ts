import {Component, Output, Input, EventEmitter} from 'angular2/core';
import {GuessFeedback} from './models';

@Component({
    selector: 'guess-component',
    templateUrl: 'app/input.component.html'
})
export class GuessComponent { 
  guess: string = 'a';

  @Input() title: string;

  @Output() keyup : EventEmitter<any> = new EventEmitter();
  @Output() guessMade: EventEmitter<string> = new EventEmitter();

  sendKeyUp() {
    this.keyup.emit(null);
  }

  makeGuess() {
    this.guessMade.emit(this.guess);
    this.guess = "";
  }
}

