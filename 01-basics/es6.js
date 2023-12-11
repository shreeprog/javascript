//for in
//in for in loop it return the index values of the elements.
const array1=[5,7,4,6,2,3,9]
for(let indexValues in array1)
console.log(indexValues);
//for of
// here for of return the element of the array.
for (let values of array1)
console.log(values);
//for each
//for each return undefined means nothing we have to pass the output manually. 
const language=['c','c++','java','python','react','angular']
const langReturn=language.forEach((item)=>{//(item)-callback function
//return item
console.log(item);
})
//console.log(langReturn);
//filter
const number=[3,4,5,7,8,2,9]
// const newArray=number.filter((item)=>{
//     return item>5;
// })
// console.log(newArray);
const myNumbers=[]
number.forEach((num)=>{
    if(num>6){
        myNumbers.push(num)
    }
})
console.log(myNumbers);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const findGenre=books.filter((gn)=>gn.genre==='History')
 // console.log(findGenre);
const editionBook=books.filter((bn)=>{return bn.publish>=1994 && bn.edition>=2007})
console.log(editionBook);
//map method-for changing similar type of data at a time in all element .
const numSeries=[1,2,3,4,5,6,7,8]
//const changeData=numSeries.map((data)=>{
    //return data+2;
//})
//console.log(numSeries);
//console.log(changeData);
//chaining-add both filter and map and other function in one program.
const newArray=numSeries
                .map((data)=>data+2)
                .map((data)=>data*10)
               .filter((data)=>data>40)
console.log(newArray);
//Reduce method
const reduceSeries=[1,2,3,4,5]
 const myTotal=reduceSeries.reduce(function changeSeries(accumulator,currentValue){
console.log(`accumulator:${accumulator}and ${currentValue}`)
return accumulator+currentValue
},2)//2 is the initialvalue(accumulator).
console.log(myTotal);
//using arrow function.
const myTotal1=reduceSeries.reduce((acc,currValue)=>acc+currValue,0)
console.log(myTotal1);
