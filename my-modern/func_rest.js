//「...」可変長引数：渡された任意個数の引数をまとめて配列として取得できる。
function sum(...nums) {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}

console.log(sum(10, 25, 2));
console.log(sum(7, 13, 25, 6, 100));
//スプレッド構文
console.log(sum(...[10, 25, 2]));

//可変長引数は、通常の引数と併用できるが、その場合は引数リストの末尾に置く必要がある。
//さもないと、以降の引数が全て可変長引数に吸収されてしまう。
// function hoge(...args, title){...} →NG
// function hoge(title, ...args){...} →OK