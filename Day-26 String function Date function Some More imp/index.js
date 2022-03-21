console.log("String and Date functions")
s = "I am String"


console.log(s.charAt(5))
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.slice(5,))
console.log(s.startsWith("I"))
// console.log(s)
a = 25
a = a.toString() // str(int(5))
console.log(typeof(a))
console.log(s.substr(0,3))
a = "            bab   lu       "
console.log(a.trim())
a = "bablu"
b = " bambal"
c = b.replaceAll("b","z")
console.log(c.includes("z"))
// c = a.concat(b)
console.log( c)
//  More string functions:
/**
 * concat() 
 * startsWith() 
 * endsWith()
 * search()
 * replace()
 * replaceA()
 * 
 */


// Date function s: 

d = new Date()
 console.log(Date.now())
console.log(d)
console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDay())
console.log(d.getTime())


s = new Date()
s.setFullYear("2019")
s.setMonth("6")
s.setDate("2")
console.log(s)


