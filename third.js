// if else
// 1st -- if
//2nd -- if then else
//3rd -- ladder if else 
//4th -- nested if else 
//==============================================if else =====================================================
    // if (condition)
    // {
    // }
    // else{

    // }
    //Q1.   W A P to check no is positive or negative
    // let num = parseInt(prompt("enter a no"))
    // if (num>0){
    //     console.log("+ve no");
        
    // }
    // else{
    //     console.log("-ve no");
        
    // }

    //Q2.   wap take two no integer from user and find greatest no b/w two no
      
     
    //  let num1 = parseInt(prompt("enter first no"))
    //  let num2 = parseInt(prompt("enter first no"))
    // if (num1>num2){
    //     console.log("num1 is greater");
        
    //  }
    //  else{
    //     console.log("num2 is greater");
        
    //  }

    //Q3.    wap to chek no even or odd

    // let num = parseInt(prompt("enter no"))
    // if (num % 2 == 0){
    //     console.log("no is even");
        
    // }
    // else{
    //     console.log("no is odd");
        
    // }



    //Q4.   wap to take three no to user and to check second no is even or odd  and print multiplication off all no

    // let n1 = parseInt(prompt("enter 1st number"))
    // let n2 = parseInt(prompt("enter 2nd number"))
    // let n3 = parseInt(prompt("enter 3rd number"))

    // if(n2%2==0){
    //     console.log(n1*n2*n3);
    //     console.log("even");
        
        
    // }
    // else{
    //     console.log(n1+n2+n3);
    //     console.log(odd);
        
    // }
//=============================================================ladder if else======================================================
    //ladder if else
        // if(condition){

        // }
        // else if (condition){

        // }
        // else{

        // }

        //Q1   wap to nimber positive negative or neutral

        // let num = parseInt(prompt("enter number")) 
        //  if ( num > 0){

        //  console.log(" +ve number")
        //  }
        //   else if ( num < 0) {
        // console.log(" -ve number")
        //  }
        // else {
        //   console.log(" nutral numberr")
        // }





        //Q2  wap to take input from user and check which no is greater and also found out is equal
    //  let n1 = parseInt(prompt("enter  number"))
    //  let n2 = parseInt(prompt("enter  number"))
    //  if(n1>n2){
    //     console.log("greatest no");
        
    //  }
    //  else if(n1<n2){
    //     console.log("not greater");
        
    //  }
    //  else{
    //     console.log("equal");
        
    //  }



    // let english = parseInt(prompt("enter no"))
    // // let hindi = parseInt(prompt("enter no"))
    // // let math = parseInt(prompt("enter no"))
    // // let science = parseInt(prompt("enter no"))
    // // let social = parseInt(prompt("enter no"))

    // if (100>75 == 0) {
    //     console.log("A grade");
        

    // }
    // else if (75>60==0){
    //     console.log("B grade");
        
    // }
    // else if (60>33==0){
    //     console.log("C grade");
        
    // }
    // else if(33>20==0){
    //     console.log("D grade");
        
    // }
    // else {
    //     console.log("fail");
        
    // }

//========================================nested if else================================================
    // Nested if else

// if(condition){

//     if (condition){

//     }
//     else{

//     }
// }
// else{

// }

//Q1............

// let age = parseInt(prompt("enter age"))
// if(age>=18){
//     let b = parseInt(prompt("press 1 f0r indian"))
//     if(b==1){
//         alert("eIigibIe f0r v0ting")
//     }
//     else{
//         alert("n0t eIigibIe")
//     }
// }
// else{
//     alert("u r underage")
// }


//Q2....
// let a = parseInt(prompt("Enter number"));

// if (a > 0) {
//     if (a % 2 == 0) {
//         console.log(a * a); // square if even
//     } else {
//         console.log((22 / 7) * a * a); // area of circle approx. if odd
//     }   
// } else {
//     if (a == -3) {
//         console.log(a);
//     } else {
//         console.log(a);
//     }
// }
//========================================LOOPS===============================================================

// Loops in java script
// 1. do while  2. while  3. for  4. for in  5. for of  6. for each

// syntax of do while

//  do {
//   //code
// }while(condition)

// syntax of  while

// while(conditon){
//     code
// }


// let a = 1
// do{
//     console.log(a);
//     a++
// }while(a<=15)


// let a = 10
// do {
//     console.log(a);
//     a--
// }while(a>=1)

// var --------> global
// let ---------> local
// const ----------> local

// let a
// do{
   
//      a = parseInt(prompt("enter number"))
// }while(a!= 0)

//===============================while loop =========================
// while(conditon){
//     code
// }


// let a = 1
// while(a<=10){
//     console.log(a);
//     a++
    
// }

// let num = parseInt(prompt("enter no "))
// let a=1
// while(a<=10){
//     console.log(num*a);
//     a++
    
// }


// Q1.  wap to print sum of all no betwwen 15 to 1  
// let n = 15
// let sum = 0
// while(n>=1){
//     sum = sum+n
//     n--
// }
// console.log(sum);

//=============================================for loop ============================================================
// syntax for loop  =========  increment decrement baad me hoga phle code exicute hoga
// for(initialise  :  condition  :  increment/decrement)
// {
// //code
// }

// for (let a=1; a<15; a++)
// {
//     console.log(a);
    
// }
// wap to print sum of all odd no betwwen 1 to 15 using for loop
// let sum=0
// for(let i=1; i<=15; i++)
// {
//     if(i%2!=0)
//     {
//         sum=sum+i
//     }
// }
// console.log(sum);


//=================================================nested for loop ================================================
//================syntex nested for loop ==================
// for(){
//     for(){
//         //code
//     }
// }

//Q1....
// for (let i = 1; i <= 5; i++) {
  
//     document.write("* ");
  
  
// }


//Q2...
// for (let r = 1; r <= 3; r++) {
//   for (let c = 1; c <= 5; c++) {
//     document.write("* ");
//   }
//   document.write("<br>");
// }

//Q3...
// column is dependent on row 
// for (let r = 1; r <= 4; r++) {
//   for (let c = 1; c <= r; c++) {
//     document.write("* ");
//   }
//   document.write("<br>");
// }

//Q4...

// for(let a=1 ; a<=5; a++){
//     for(let j=1 ; j<=5; j++){
//         if( a==1 || a==5 || j==1 || j==5 ){
//          document.write("*")
//         }
//         else{
//             document.write("&nbsp&nbsp")
//         }
//     }
//     document.write("<br>")
// }

//Q4...
// for(let r=1 ; r<=5; r++){
//     for(let c=1 ; c<=5; c++){
//         if( r==c || r + c == 6){
//          document.write("*")
//         }
//         else{
//             document.write("&nbsp&nbsp")
//         }
//     }
//     document.write("<br>")


//=====================================data types===============================================

//datatypes are two types
//1.   primitive  //   primitivr type
// 1. number  2. string  3. boolean  4. null  5. undefined

//2.  non primitive //  non primitive types
//  1. array  2. object  3. function 

//============================================Function============================================
// function is a block of code set of instruction
//Q why do we need function ??
// we use function for code readibility



//syntex of function

// function identifire()   -------------  function decleration
// {
//     code                -------------  funtion defnition
// }
//identifire ()            -------------  function calling

// how to make function
// 1. function decleration
// 2. funtion defnition
// 3. function calling


//Q1.....
// function sum()
// {
//     let n1 = 10
//     let n2 = 20
//     console.log(n1+n2);
    
// }
// sum()

//Q2..  wap find area of rectangle using funtion to take input from user 
// function sum ( )
// {
//     let  l  = parseInt(prompt("enter a number"))
//     let  b = parseInt(prompt("enter a number"))
//     console.log(l*b)
// }
// sum ( ) --------this is 

//Q3.....

// function sum(){
//     let n=parseInt(prompt("enter no b/w 20 to 1"))
//     if (n>=11 && n<=20)
// }









//=======================================two types of function==========================================
//1.  pre defined(inbuild)
//2.  user defined
           
// 4. types of user defined function
//1.  no argument & no return
//2.  with argument & no return
//3.  with argument & with return
//4.  no argument & return

//function demo (a)---------parameter/formal value
// {

// }
// DeviceMotionEvent(8)--------argument/actual value

//2.========================with argument & no return exmp=========================================
// function demo (a)
// {
//     console.log(a+a);
    
// }
// Demo(10)

//Q1. wap to chek input from user and check no is even or odd using function type 2 with argument & no return
// let a = parseInt(prompt("Enter a number:"));
// function print (b) {
//     if (b % 2 === 0) {
//         console.log(" is Even");
//     } else {
//         console.log(" is Odd");
//     }
// }
// print (a)

// Q2. wap to print reverce table of any no using function type 2 with argument & no return
// let  num = parseInt(prompt("enter a number"))
// function sum (num)
// {
//      for(let a = 10; a>=1; a--){   
//     console.log(num*a)
// } 
// }
// sum (num )

//========================================3.  with argument & with return =========================================

// function demo(name){
//     return name
// }
// let recive = demo("rahul")
// // console.log(recive);

// // or
// console.log(demo("rahul"));

//Q1...   wap to taken from user agar wo input 1 se 5 tk me hota to check krna h wo even h ya odd h agar wo input even hota h to aapko 
//        sum print krna h 1 se 15 tk aur wo odd direct console me print karana h by using with argument & with return

// let  n = parseInt(prompt("enter a number"))

// function add(num){
// {   let sum = 0
//     if(num%2==0)
//     {
//         for(let a=1; a<=5; a++)
//         {
//             sum=sum+a
//             return sum
//         }
//     }
//     else{
//         console.log(num);
        
//     }
// }

// }

// console.log(add("n"));


//======================================no argument & return =========================================

// function demo(){
//     let a = 9
//     return a+a
// }
// console.log(demo());

//wap to take input from user and find area of triangle using type 4 no argument & return
// function areaOfTriangle() {
//     // Take input from user
//     let base = parseFloat(prompt("Enter the base of the triangle:"));
//     let height = parseFloat(prompt("Enter the height of the triangle:"));

//     // Calculate area
//     let area = 0.5 * base * height;

//     // Return the result
//     return area;
// }

// Call the function and display the result
// let result = areaOfTriangle();
// document.write("The area of the triangle is: " + result);

//==========================================================================================  

//  functon with name is called named function
// funtion withot name is called anonymus function 

//  =====================================arrow function ===================================2015 built in ECMA ES6
//function introduce  in 2015 in js it return always a value ..........
//  thn we want to write multiple line of code then we have to use {} , and for single we can use() 
//we can write multiple type of arrow function 
//syntex
//1. ()=>{return}
//2. ()=>( )
//3. ()=>
//4.  =>
//5. =>()
//6. =>{return}


// CALLBREAK FUNCTION :-   WHEN  we pass the create a functiion as a parameter that are called the the call break function 
// EXP:-  funtion fun1 (fun2){
// }
//fun1 = high order function
//fun2 = callebrak function
// CALLBACK FUNCTION
// function fun (function----------> callback function)
//{


//}-------------------------> high order function


//===================================================================================================
// let fun = ()=>{return "shiva"}
// console.log(fun());

//==================================arrow function with argument=====================================
// let fun1 = (a)=>{return a+a}
// console.log(fun1(10));


// let demo = (num)=>(num+num)
// let n = demo(8)
// console.log(n);


// let demo = num=>(num+num)
// let n = demo(8,9)
// console.log(n);


// wap to return square of any number
// let fun1 = num =>(num*num)
// let a = fun1(parseInt(prompt("Enter a number:")));
// console.log(a);

// wap to return area of rectangle
// let l = ( parseInt(prompt("enter a length")))
// let b = ( parseInt(prompt("enter a bridth")))
// let dem = (x,y) => (x*y)
// console.log (dem(l,b))


//wap to retun area of triangle
// wap to return cube of any number

// let dem2 = num => (num*num*num)
// let n = dem2( parseInt(prompt("enter a number")))
// console.log(n)


//wap to retunr area of circle