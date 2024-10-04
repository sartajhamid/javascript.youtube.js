let Name="Sartaj Ahmad Mir"
const Phone = 91892388
var email="sartajhamid561@gmail.com"
city="srinagar"
let state
console.log("block scoped variable definition using let keyword: "+Name)
console.log("constant: "+Phone)
console.log("global scoped variable definiton using var keyword: " +email)
console.log("city: "+city)
console.log("undefined variable definition " +state);

/*
this above can be logged more easily using the table keyword 

as console.log as follows
*/
console.table([Name,Phone,email,city,state])