if (true) {
  // let x = 13;
  var x = 13;
}
console.log(x); 
//let変数はブロックスコープを持つため{}を外れた時点でエラーとなる。
//var変数はブロックスコープを持たないため、{}を外れても存在し続ける。
//一般的には変数の有効範囲は狭くあるべきなので、letが推奨される。

let msg = 'Hello';
// let msg = 'Good bye'; 同名の変数定義は不可。varは再宣言可能であるが、意図しない変更がバグの原因となるため推奨されない。
msg = 'Good bye'; //変数を変更
console.log(msg); //Good bye