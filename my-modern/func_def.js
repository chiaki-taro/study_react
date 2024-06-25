function getTrapezoidArea(upper = 1, lower = 1, height = 1) {
  return (upper + lower) * height / 2;
}
//仮引数名=初期値で引数に初期値を設定できる。
//初期値に式を渡すこともできる。
//function getTrapezoidArea(upper = 1, lower = upper, height = upper) {...};

console.log(getTrapezoidArea(10, 5, 3));
console.log(getTrapezoidArea(10, 5))
console.log(getTrapezoidArea(10));