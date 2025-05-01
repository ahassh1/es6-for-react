
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
   const averagee = parseInt(avg);
   return averagee;

 }
 const totalAverage = totalNums(24,45,23,34,56,34,32)
 console.log("average",totalAverage);