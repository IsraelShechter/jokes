import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Joke } from '../model/joke';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { JokeDetailsComponent } from '../joke-details/joke-details.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  jokes: Joke[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog) {


  }
  ngOnInit(): void {
    this.dataService.getAllJokes().subscribe(res=> {
      this.jokes = res;
    });
  }

  jokeClick(joke: Joke) {
    const dialogRef = this.dialog.open(JokeDetailsComponent, {
      data: {joke},
    });
  }
}
