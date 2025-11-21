//api ko apne js page me fetch karane ke liyr=e use krte h .....
// http=> hyper text tranfsfer protocall
// http methods...
// 1. get ---> data ko acces krna
// 2. post --> data ko insert krna
// 3. delete ----> data ko delete krna
// 4. put ------> data ko update krna
// 5. patch ------> data ko update krna

//-------------------------------11.11.25---------------------------------------

// promise ====================
//   - ek object hai

//  1 - reject     -------  [ .catch ( fun() )]
//  2 - pending    -------| 
//  3 - fullfill          | [ .then ( fun() )]



// Sync  -  it read code line by line
// Async -  

// async await - 

// async function access() {
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let res = await data.json()
//     let result = res.map((e)=>`
//     <tr> 
//     <td> ${e.userId}</td>
//     <td> ${e.id}</td>
//     <td> ${e.title}</td>
//     </tr>
//     `).join("")
//   document.querySelector("#showdata").innerHTML = result

// }
// access()

//-----------------------------12.11.25-----------------math module------------------------------------

// console.log(Math.pow(3,2));
// console.log(Math.sqrt(16));
// console.log(Math.PI);
// console.log(Math.min(10,8,9,6,5,2));
// console.log(Math.max(8,9,1,2,10));
// console.log(Math.trunc(20.45));
// console.log(Math.trunc(Math.random()*10+1));

let today= new Date()
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()+1);
console.log(today.getDate());
console.log(today.toLocaleTimeString());

