// //  false value: 0 "" false null undefined ;
// //  truthy value: 'lsfjd' 243 {} [] true;

// const test = '';
// if(test){
//     console.log("truthy value")
// }
// else{
//     console.log('false value')
// }

// const testt  = {};
//  testt ? console.log('is truthy') : console.log('is falsy')


//  //////////////////////////////////////////////////////////////////////

//  const num =50;
// const result = (num >= 10 && num < 20)? 'true':'false'
// console.log(result)
// ////////////////////////////////////////////
// const num = 60;
// let result;
// if(num>= 10 && num < 60){
//     result =true
// }
// else{
    
//    result = false;
// }
// console.log(result)

// ////////////////////////////////////////////////////////

// function totalNum(num){
//  if(num >10 || num <30){
//     return true;
//  }
//  else{
//     return false;
//  }
// }
//  const result = totalNum(60);
//  console.log(result)


 //////////////////////////////////////////////////////////

 const numbers=[24,45,23,34,56,34,32]
 let total =0;
 for(let i=0 ; i<numbers.length ; i++){
    total += numbers[i] ;
 }

  const average = total /numbers.length;
  console.log("average" , average)

  /////////////////////////////////////////////////

  function totalNums (a,b,c,d,e,f,g){
    const sumNum = a+b+c+d+e+f+g;
    const avg = sumNum /7;
    const averagee = parseInt(avg)
    return averagee;

  }
  const totalAverage = totalNums(24,45,23,34,56,34,32)
  console.log("average",totalAverage)