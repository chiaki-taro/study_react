const author = 'YAMADA.Yoshihiro';
// author = 'WINGS Project'; constは定数なので再代入できない。
console.log(author);

const list = ['React', 'Vue', 'Augular'];
list[0] = 'Roit'; //constは「再代入できない」であって、「変更できない」ではない。中身の要素を入れ替えることは可。
// list = ['Java', 'C#', 'Python']; listに対して再代入を試みているためNG
console.log(list); // [ 'Roit', 'Vue', 'Augular' ]