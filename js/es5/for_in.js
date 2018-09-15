var hero = {
  name: 'aaa',
  id: 1,
};

for(var h in hero) {
  console.log(h, hero[h]); //???
}


var fruits = ['apple', 'banana', 'grape'];

for(let item of fruits) {
  console.log(item, fruits[item]); // ???
}


