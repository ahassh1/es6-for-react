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
const isActive = false;
const showUser = () => console.log('show green light')
const hideUser = ( ) => console.log('show red light')

isActive? showUser() : hideUser();
isActive && showUser();
isActive || hideUser();
