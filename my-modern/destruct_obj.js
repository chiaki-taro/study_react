const member = {
  fullname: '佐藤理央',
  sex: 'female',
  age: 18
};
//オブジェクトの場合は、名前で割り当て先を決めるので、並びはプロパティの定義順と異なっても問題はない。
//割り当てのないプロパティがあっても構わない。（この場合ageプロパティが無視される）
//目的のプロパティが存在しなかった場合に備えて「変数名＝規定値」の形式で規定値を設定することも可能。
const { fullname, sex, memo = '---' } = member;


// let fullname, sex, memo;
// ({ fullname, sex, memo = '---' } = member);
console.log(sex, fullname, memo);