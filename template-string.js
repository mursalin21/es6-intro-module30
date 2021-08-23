const multiLine = 'This is my first line. \n' +
    'this is my second line. \n' +
    'third line text here. \n' +
    'fourth line text here. \n';

console.log(multiLine);

const multiLineNew = `This is the first line
this is second line
this is the third line
fourth line`;

console.log(multiLineNew);
console.log('');


const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>';
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`;

console.log(new1);
console.log('');


const friends = ['abul', 'babul', 'kabul', 'sabul'];
const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person\'s name is ' + first + ' ' + last;
const fullNew = `This person's name is: ${first} ${last}. He has money ${friends.length * 500}. He lies in Dhaka.`;
console.log(fullOld);
console.log(fullNew);