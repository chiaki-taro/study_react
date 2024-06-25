const list = [10, 20, 30];
const [one, ...rest] = list;
console.log(one, rest); //分割しきれなかった残りの要素を「...」演算子をつけた変数restに格納