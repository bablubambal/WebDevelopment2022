console.log("Array Objects and methods")
// Arrays  in JS 
var a = [1,2,3]
//push to insert element
a.push(5)
console.log("Aftering pushing",a)
// remove last element
a.pop()

console.log("After poping",a)
a.shift()
console.log(a)
a.unshift("bablu")
console.log(a)
a.unshift([1,2,3])
console.log(a)
console.log(typeof(a))
a.reverse()
b =a.toString()
console.log(typeof(b))

console.log(a)

a = [1,2,3]
b = [4 ,5, 6]
c = ['b','a','b','l','u']
// c = a.join("*")
console.log(a.length)
console.log(c.join("\n"))

d = {
    "name":"bablu",
    "id":123,
    "clg": "MREM"


}
console.log(d)
d["name"] = "ram"
d['nickname'] = "qwerw"
console.log(d["name"])
console.log(d)

 students  =[]
 s1 = {"name":"bablu","id":1}
 s2 = {"name":"bablu","id":2}
 s3 = {"name":"bablu","id":3}
 students.push(s1)
 students.push(s2)
 students.push(s3)
 console.log(students)

 students  ={}
 s1 = ["bablu",1]
 s2 = ["bablu",2]
 s3 = ["bablu",3]
 students[1] = s1
 students[2] = s2
 students[3] = s3

 console.log(students)



 c = ['b','a','b','l','u']
  b = "b"
  a = "a"
  c = "b"
  l = "l"
  u = "u"
 console.log(c[0])
 console.log(c[1])
 console.log(c[2])
 console.log(c[3])
 console.log(c[4])
//  console.log(c["\n"])
 
