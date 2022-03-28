console.log("Loops in JS")


// For Loop:

/**
 * Synatax of for loop
 * 
 *  for (i = 0 ; i<condition; i++){
 * // Write you code here...
 * }
 * 
 * 
 * 
 */

a = [0,1,2,3,4,5,6,7,8,9,10,12]
b = a.length
// console.log("length of a :",b)


// Traditional For loop

// for( bablu = 0;bablu<a.length;bablu++){

//     console.log(a[bablu])
// }
// for( i = 0;i<a.length;i++){

//     console.log(a[i])
// }

 frdlist = ['ram ','shyaam','rohan','mohan']


 // Modern for each loop
// frdlist.forEach(k=> {
//     console.log("These are my frds: ",k)
    
// });

// FOR loop using in:
const cars = ["BMW", "Volvo", "Saab", "Ford","bablu"];
// let text = "";
for ( let x in cars) {
//   text += cars[x] + " ";
console.log(cars[x])
} 




// while loops :
b =  20;



i = 0
// console.log("Start of While")
// while (i<0) {
//     console.log("inside while")

//     //Your Code here....
//     console.log(i)
//     i++
    
// }
// console.log("End of while")

// Do while loop:
b = 20
i = 0
console.log("****do while*****")
console.log("stat do while")
do {
    console.log("inside do while")
    console.log(i)
    i++
} while (i<0);
console.log("end of do while")




/**
 * 
 * Task :
 * Create an array of employee :
 * 1 . Display all employees of array 
 *       by  using for foreach while and do while
 * 2. Display only employees who's names start with "A"
 * 3. who belogs to hr dept
 */



