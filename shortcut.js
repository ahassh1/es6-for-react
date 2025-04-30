//  false value: 0 "" false null undefined ;
//  truthy value: 'lsfjd' 243 {} [] true;

const test = '';
if(test){
    console.log("truthy value")
}
else{
    console.log('false value')
}

const testt  = {};
 testt ? console.log('is truthy') : console.log('is falsy')