
export class GuessFeedback {
  success: boolean;
  message: string;
}

export class HangmanGame {
  private _word: string;
  private _guesses: Set<string>;

  constructor(word: string) {
    this._word = word;
    this._guesses = new Set<string>();
  }

  makeGuess(guess: string) : GuessFeedback {
    let fb = new GuessFeedback();
    if (guess.length !== 1) {
      fb.success = false;
      fb.message = "You can only guess one letter at a time!";
    } else if (this._guesses.has(guess)) {
      fb.success = false;
      fb.message = "You have already guessed that!";
    } else {
      fb.success = true;
      fb.message = "Successful guess! Did you get it right?";
      this._guesses.add(guess);
    }
    return fb;
  }

  getDisplayWord(): string {
    let dw = '';
    for (var letter of this._word) {
      if (this._guesses.has(letter)) {
        dw += letter;
      } else {
        dw += '*';
      }
    }
    return dw;
  }

  getWrongGuesses() : number {
    let count = 0;
    this._guesses.forEach((g) => {
      if (!this._word.includes(g)) {
        count++;
      }
    });
    return count;
  }

}
