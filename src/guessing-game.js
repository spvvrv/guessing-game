class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessNumber = Math.round((this.min + this.max) / 2);
    return this.guessNumber;
  }

  lower() {
    this.max = this.guessNumber;
  }

  greater() {
    this.min = this.guessNumber;
  }
}

module.exports = GuessingGame;

// let arr = [-1, 0, 3, 5, 7, 9, 12];

// function binarySearch(arr, key) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);

//     if (arr[middle] === key) {
//       return middle;
//     } else if (arr[middle] < key) {
//       //если средний элемент меньше ключа, ищите в правой половине
//       start = middle + 1;
//     } else { //если средний элемент болльше ключа, ищите в левой половине
//       end = middle - 1;
//     }
//   }
//   return -1;
// }
