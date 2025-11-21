// syntex of map function
// let ar = [{name:"Suraj",age:18} , {name:"Arpit",age:12}]
// let res = ar.map((e)=>{
//     return e.age+"  "+e.name
// })
// console.log(res);


//syntex of filter function
// let ar = [{name:"Suraj",age:18} , {name:"Arpit",age:12}]
// let res = ar.filter((i)=>{
//     return i.age
// })
// console.log(res);

// destrustering of array ---------->in using array and object
// let [name,c,co,st] = ["tanmay","bhopal","india","state"]
// console.log(name);
// console.log(c);
// console.log(co);
// console.log(st);

//destructurin of object
// let{name,age}={
//     name:"tv",
//     age:14
// }
// console.log(name);



// ...spread operator
// in using merge

// let ar1 = [1,2,3]
// let ar2 = [4,5,6,...ar1]
// console.log(ar2);


//---------------------------8.11.25------------------local storage------------------------------------------------------
// 1. key value -------------> me  data save hota h
// 2. string  ---------->formate me 

// 4. type of local storage item
// 1. set item()  ======> save
// 2. get item()  ======> access
// 3. remove item() =====> at time one element
// 4. clear()    ========> delete

// 1.set item
// localStorage.setItem("username","nikhil")
// localStorage.setItem("userage",30)
// localStorage.setItem("usernumbet",55466521)
// localStorage.setItem("useremail","ksjfksrhfowij")
// localStorage.setItem("usersub","maths")

// 2. get item
// let name = localStorage.getItem("username")
// console.log(name);

// 3. remove item
// localStorage.removeItem("userage")

// 4. clear
// localStorage.clear()



// let person = {
//     name:"raj",age:45,city:"bhopal"
// }
// localStorage.setItem("userdata",JSON.stringify(person))

// let vl = JSON.parse(localStorage.getItem("userdata"))
// console.log(vl);


//-----------------------------------10.11.25--------string------------------------------------------
// collection of charecter is called string

// let name = "ritik singh"
// let city  ="bhopal"
// console.log(name[4]);
// let newname = name.toUppercase()
// console.log(newname);
// console.log(city.tolowercase());

// let name = " tanish "
// console.log(name.trim());


// let name = " tanish "
// console.log(name.trimStart());

// let name = " tanish "
// console.log(name.trimEnd());



//template literals
// let faculty = "By quasim sir"
// let st1 = `this is javascript
// class ${faculty}`
// console.log(st1);


//-----------------------api====== application programming interface--------------------