import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  private word$: Observable<any>;
  private _wordObserver: Observer<any>;

  constructor(private http: Http) {
    this.word$ = new Observable(observer => this._wordObserver = observer)  
  }

  getWord() {
    return this.word$;
  }

  newWord() {
    this.http.get('https://hangman-service.herokuapp.com/api')
              .map(data => data.json())
              .toPromise()
              .then(data => this._wordObserver.next(data));
  }



}

