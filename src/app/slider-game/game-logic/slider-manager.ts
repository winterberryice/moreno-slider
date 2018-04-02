import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GameCell } from './game-cell';

@Injectable()
export class SliderManager {
  GameCellSubject = new Subject<GameCell>();

  constructor() {}
}
