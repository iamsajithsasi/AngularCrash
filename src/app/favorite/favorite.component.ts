import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavInput
  @Output() isFavOutput = new EventEmitter();

  onClick() {
    this.isFavInput = !this.isFavInput
    this.isFavOutput.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
