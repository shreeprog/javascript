const myarr=[1,2,3,4,5,6,7,8,];
console.log(myarr);
console.log(myarr.includes(6));
console.log(myarr.includes(10));
console.log(myarr.indexOf(8));
console.log(myarr.indexOf(10));
//if element not present then -1 and if present than index of that element will return.
const demoArray=myarr.join();
//join->array converted into string.
console.log(demoArray);
console.log(typeof demoArray);
//slice->(n-1)
const myarray=[1,2,3,4,5,6];
console.log("s",myarray);
const myarray1=myarray.slice(2,4);
console.log(myarray1);
console.log(myarray);
//splice
console.log("d",myarray);
const myarray2=myarray.splice(2,5);
console.log(myarray2);
console.log(myarray);
const marvel_hero=['thor','ironman','spiderman'];
const dc_hero=['batman','superman','flash'];
const all_heros=marvel_hero.concat(dc_hero);
console.log(all_heros);
//spread operator(esp)
const hero=[...marvel_hero,...dc_hero];
console.log(hero);
//(...)->means spread operator
//const action_hero=...dc_hero;
let otherarr=[1,2,3,4,[5,6,7,[8,9,10]],11,12,[13,14,15],16];
let otherarrList=otherarr.flat(Infinity);
console.log(otherarrList);
console.log(array.isarray("otherarr"));
console.log(array.from("subha"));

