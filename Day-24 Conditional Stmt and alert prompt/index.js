console.log("Day 2 in JS : Conditional STmts")

///Bit wise operators
console.log("Bit wise and ",2&3)
console.log("BIT WISE OR    ",2|3)
//Simple question

student = [34, 45,99]
console.log("student passed",student[0]>35 && student[1]>35 && student[2] >35)
console.log("student passed",student[0]>35 || student[1]>35 || student[2] >35)

// and table 
/***
 * And Table 
 A B Result 
 1 1 1
 1 0 0
 0 1 0
 0 0 0

 OR Table

 A B Result:
 1 1 1
 1 0 1
 0 1 1
 0 0 0






 */

//Conditional STmts if else:
// syntax
// if(condition){
//     //code here
// }
// else{

// }

// a = prompt()
a = 15
if(a>10 || a == 1){
    console.log("i am greater than 10")
}
else{
    console.log("i am less than 10")
}

//Voting System:
age = -23
age = prompt("Enter you age")

if(age == 999){
    console.log("you are still alive aaa......")
}
else if(age == 18){
    console.log("do you have voter card")
}
else if(age>18){
    console.log("you are eligilbe to votes: welcome to voting")
}
else if (age<0){
    console.log("your still not born")
}
else{
    console.log("Sorry you cant vote now ...")
}



// A am student:
/***
 * Home work
 * marks = 0-100
 * print grade:
 * A
 * B
 * C
 * D
 * F
 * 
 */


// Alert:
// alert("Hi i am alert")
// alert("you cant leave your password empty")
// alert("MY NAME IS ALRET") 
// prompt in js 
//  b = prompt("Enter you name")
//  console.log("the name you enterted is :",b) 