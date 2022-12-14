import { OnInit , Input} from '@angular/core';
import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DataService } from '../data.service';
import { Joke } from '../model/joke';
@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.scss']
})
export class JokeDetailsComponent implements OnInit{

  suggestedJokes: Joke[] = [];
  joke?: Joke;
  constructor(public dialogRef: MatDialogRef<JokeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {joke: Joke}, private service: DataService) {

  }
  ngOnInit(): void {
    this.initJoke(this.data.joke);

  }

  initJoke(joke: Joke) {
    this.joke = joke;
    this.service.getRandomJokesOfType(joke).subscribe(res => {
      this.suggestedJokes = res;
    });
  }

  getAletsDesc(joke: Joke) {
    let flags = this.getFlags(joke);
    if (flags.length == 0) {
      return "with no alerts";
    } else if(flags.length == 1) {
      return `with '${flags[0]}' alert`;
    } else {
      return `with ${flags.join(" and ")} alerts`
    }


  }

  goToSuggested(joke: Joke) {
    this.initJoke(joke);
  }

  private getFlags(joke: Joke) {
    if (joke.flags) {
      let result = [];
      if (joke.flags.nsfw) {
        result.push('nsfw');
      }
      if (joke.flags.political) {
        result.push('political');
      }
      if (joke.flags.racist) {
        result.push('racist');
      }
      if (joke.flags.religious) {
        result.push('religious');
      }
      if (joke.flags.sexist) {
        result.push('sexist');
      }
      return result;
    } else {
      return []
    }
}
}
