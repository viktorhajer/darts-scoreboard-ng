import {Injectable} from '@angular/core';

export const PLAYER_NAME = 'phil';
export const PLAYER_DELAY = 1000;
const MAX_LEVEL = 10;
const PLAYER_LEVEL = 5;


@Injectable({providedIn: 'root'})
export class BotService {

  calculateMultiTarget(targets: number[]) {
    // TODO
  }

  calculateTarget(target: number): number {
    let actual = Math.floor(Math.random() * MAX_LEVEL) + 1;
    actual = target === 20 ? (actual + 3) : actual;
    if (actual <= PLAYER_LEVEL) {
      return target;
    } else {
      const upOrBottomLine = Math.floor(Math.random() * 3);
      const mistakeLevel = ((actual - PLAYER_LEVEL) > 4 ? 4 : (actual - PLAYER_LEVEL)) - 1;

      if (mistakeLevel === 3) {
        return 0;
      }
      return TARGET_MATRIX[target][mistakeLevel][upOrBottomLine] - 1;
    }
  }

  isDoublePoint(): boolean {
    return Math.floor(Math.random() * 100) < 15;
  }

  isTriplePoint(): boolean {
    return Math.floor(Math.random() * 100) < 5;
  }
}

const TARGET_MATRIX = [
  [ // 1
    [20,18,5],
    [5, 4, 12],
    [12, 13, 7]
  ],
  [ // 2
    [15, 17, 10],
    [10, 3, 6],
    [6, 19, 9]
  ],
  [ // 3
    [17, 19, 2],
    [2, 7, 15],
    [15, 16, 5]
  ],
  [ // 4
    [18, 13, 1],
    [1, 6, 20],
    [20, 10, 8]
  ],
  [ // 5
    [12, 20, 9],
    [9, 1, 14],
    [14, 18, 2]
  ],
  [ // 6
    [13, 10, 4],
    [4, 15, 18],
    [18, 2, 8]
  ],
  [ // 7
    [19, 16, 8],
    [3, 8, 17],
    [17, 11, 1]
  ],
  [ // 8
    [16, 11, 7],
    [7, 14, 9],
    [19, 9, 6]
  ],
  [ // 9
    [14, 12, 11],
    [11, 5, 20],
    [8, 20, 10]
  ],
  [ // 10
    [6, 15, 13],
    [13, 2, 4],
    [4, 17, 11]
  ],
  [ // 11
    [8, 14, 16],
    [16, 9, 12],
    [7, 12, 10]
  ],
  [ // 12
    [9, 5, 14],
    [14, 20, 11],
    [11, 1, 15]
  ],
  [ // 13
    [4, 6, 18],
    [18, 10, 15],
    [1, 15, 16]
  ],
  [ // 14
    [11, 9, 16],
    [8, 12, 5],
    [16, 5, 15]
  ],
  [ // 15
    [10, 2, 6],
    [6, 17, 13],
    [13, 3, 14]
  ],
  [ // 16
    [7, 8, 11],
    [19, 11, 14],
    [3, 14, 13]
  ],
  [ // 17
    [2, 3, 15],
    [15, 19, 7],
    [10, 7, 12]
  ],
  [ // 18
    [1, 4, 20],
    [20, 13, 6],
    [5, 6, 19]
  ],
  [ // 19
    [3, 7, 17],
    [17, 16, 8],
    [2, 8, 18]
  ],
  [ // 20
    [5, 1, 12],
    [12, 18, 9],
    [9, 4, 19]
  ],
  [ // BULL
    [20, 3, 6],
    [1, 19, 11],
    [18, 7, 8]
  ]
];
