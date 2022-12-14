import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Joke } from './model/joke';
import { LoginDto } from './model/loginDTO';
import jsonData from './jokes-json.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  jokes: Joke[] = jsonData;
  constructor() { }

  login(credencials: LoginDto) {
    let result = false;
    if (credencials.email.trim() == 'user@gmail.com' && credencials.password.trim() == 'Aa123456!') {
       result = true;
    }
    return of(result)
  }

  getAllJokes() {
    return of(this.jokes);
  }

  getRandomJokesOfType(jokeBase: Joke) {
    let arr = this.jokes.filter(x=>x.type == jokeBase.type);
    let result: Joke[] = [];
    while (result.length < 5) {
      let index = this.getRandomNumber(arr.length);
      let joke = arr[index];
      if (result.findIndex(x=>x.id == joke.id) == -1 && joke.id != jokeBase.id) {

        result.push(joke);
      }
    }
    return of(result);
  }

  private getRandomNumber(max: number) {
    return Math.round(Math.random() * max)
  }
}
