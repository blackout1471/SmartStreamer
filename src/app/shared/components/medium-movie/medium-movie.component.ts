import { Component, OnInit, Input } from '@angular/core';
import { MovieDto } from '../../models/movieDto';

@Component({
  selector: 'app-medium-movie',
  templateUrl: './medium-movie.component.html',
  styleUrls: ['./medium-movie.component.scss']
})
export class MediumMovieComponent implements OnInit {

  @Input() isMovieSelected: boolean = false;
  @Input() movieData: MovieDto = new MovieDto("null", "");

  constructor() { }

  ngOnInit(): void {
  }

}
