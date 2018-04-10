import { SliderManager } from './../game-logic/slider-manager';
import { Component, OnInit } from '@angular/core';
import { Consts } from '../game-logic/game-cell';

@Component({
  selector: 'slider-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor(private sliderManager: SliderManager) {}

  ngOnInit() {}

  private newClicked() {
    console.log('new');
  }

  private resetClicked() {
    console.log('reset');
  }

  private solveClicked() {
    console.log('solve');
  }
}
