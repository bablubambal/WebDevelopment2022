console.log("Nested if else")

//If else:
/* 
syntax:
if(condition ){
    //code to be executed
}
else {
    //else code
}
*/
m = 0
// if(m <90){
//     if(m>95){
//         console.log("you are toooper")
//         if(m<98){
//             console.log("try hard to get 100")
//         }
//     }
//     else{
//         console.log("u passed")
//     }
// }
// else{
//     console.log
// }


//Switch 

/** Syntax of Switch
switch (key) {
    case value:
        
        break;

    default:
        break;
}

  */

s = 25
// console.log(s<99)
// switch (s) {
//     case s<50:
//         console.log("less than 50")
        
//         break;
//     case s>90:
//         console.log("value is more than 90")

//     default:
//         break;
// }
switch(s){
    case s>99:
        console.log("you are failed")
         break;
    case s<50:
        console.log("you got D grade ")
        break
    case s<80:
        console.log("you got B")
        break
    case s<90:
        console.log("you got A")
        break;
    case s<99:
        console.log("you are tooper")
        break

    default:
      //  console.log("no the exact case")
        break;
}


// swtich 
day = ""
console.log("the new day is giving us",new Date().getDay())
switch (0) {
    case 0:
      day = "Sunday";
      console.log(day)
     // break;
    case 1:
      day = "Monday";
      console.log(day)
    //   break;
    case 2:
       day = "Tuesday";
       console.log(day)
     // break;
    case 3:
      day = "Wednesday";
      console.log(day)
    //  break;
    case 4:
      day = "Thursday";
      console.log(day)
    //   break;
    case 5:
      day = "Friday";
      console.log(day)
    //   break;
    case 6:
      day = "Saturday";
      console.log(day)
  }


