const list = [10, 20, 30];
const [x, y, z] = list;
console.log(x, y, z);

const [a, b] = list;
console.log(a, b); //個数が少なければ残りの要素は無視される

const [l, m, n, o] = list;
console.log(l, m, n, o); //個数が多い場合はあふれた変数は「undefined」となる

const [p, , r] = list; //一部の変数と読み飛ばす
console.log(p, r);
