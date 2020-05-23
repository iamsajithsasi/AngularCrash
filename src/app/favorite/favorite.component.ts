import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite
  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite
    this.change.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
