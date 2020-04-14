let str = 'N ffns bt,\nYr wrtng s mng th wrst \'v vr rd'; // 'N ffns bt,\nr wrtng s mng th wrst \'v vr rd'

let newstr = str.replace(/[aeiouy]/gmi, '');
let kkk = newstr.split('');
console.log(kkk);
