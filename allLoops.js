// 1) for loop 

let numbers =[1,2,3,4,5];

console.log("printing the first 5 natural numbers");

for ( var i = 0 ; i<numbers.length; i++ )

{
    console.log(numbers[i]);
}

//output: forloop
/*printing the first 5 natural numbers
1
2
3
4
5*/

// 2) for in loop

let studentDetails ={
  Name:"sai",
  Age: 21,
  Gender:"female",
  BloodGroup:"B +ve"
};
for(var i in studentDetails)

{
console.log(i,studentDetails[i]);
} 
//output :for inLoop
/*Name sai
Age 21
Gender female
BloodGroup B +ve*/

// 3) foreach loop

let solar = ["sun", "moon", "stars", "galaxy", "aliens"];
  
solar.forEach((number, index) => {
    console.log('Index: ' + index + 
                ', Value: ' + number);
});

 /*--- output foreach loop---
  Index: 0, Value: sun
Index: 1, Value: moon
Index: 2, Value: stars
Index: 3, Value: galaxy
Index: 4, Value: aliens */

// 4) for of Loop
const cars = ["BMW" , "Volvo" ,  "Mini"];

let text = "";
for (let x of cars) {
  text += x ;
}
console.log(text);
// output for of loop
//JavaScript.