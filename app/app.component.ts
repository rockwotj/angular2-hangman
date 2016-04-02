import {Component, Pipe, PipeTransform} from 'angular2/core';
import {HangmanGame, GuessFeedback} from './models';
import {GuessComponent} from './input.component';
import {ApiService} from './api.service';
import {HTTP_PROVIDERS}    from 'angular2/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [GuessComponent],
    providers: [ApiService]
})
export class AppComponent { 
  title: string = 'Hangman App';
  game: HangmanGame;
  feedback: GuessFeedback;

  constructor(private api: ApiService) {
    this.game = new HangmanGame('');
    this.api.getWord()
            .subscribe(data => {
              this.game = new HangmanGame(data.word);
            });
    this.api.newWord();
  }

  newGame() {
    //window.location.reload();
    this.api.newWord();
  }

  makeGuess(guess: string) {
    let feedback = this.game.makeGuess(guess);
    this.feedback = feedback;
  }

}

