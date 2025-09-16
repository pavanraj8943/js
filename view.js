
// string


//   let str =" hello ";
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim().length);
// console.log(str.trimStart().length);
// console.log(str.trimEnd().length);
//   let str = "hello world";
// console.log(str.replace("world","pavan"));
// console.log(str.startsWith("hello"));
// console.log(str.endsWith("hello"));
 


// let str ="hello world";
// let arr= str.split("")
// console.log(arr);


// let str="helloworld";
// let arr= str.substring(0,8)
// console.log(arr);






// array

// let arr=["hello","insert",42,true]
// console.log(arr)
// arr.push(57);
// console.log(arr)


// let arr=["hello","insert",42,true]
// console.log(arr)
// arr.pop();
// console.log(arr)


// let arr=["hello","insert",42,true]
// console.log(arr)
// arr.shift();
// console.log(arr)

// let arr=["hello","insert",42,true]
// console.log(arr)
// arr.unshift("hii");
// console.log(arr)


// arrow function



// const sum=(a,b)=>{
//     let sum=a+b;
//     console.log(sum);
// }
// sum(10,20);


// // callback function---->



// function greet()
// {
//     console.log("Tatta");
// }
// function welcome(name,lastname,callback)
// {
//     console.log("Hello "+name +lastname);
//     callback();
// }
// welcome("Pavan_","raj",greet);




// closure function




// function outer(a,b)
// {
//     function inner ()
//     {
//         let sum=a+b;
//         console.log(sum);
//     }
//     return inner;
// }
// let sec = outer(30,50);
// sec();



// recursive function



// function fact(n)
// {
//     if(n<=1)
//     {
//         return 1;
//     }
//     return (fact(n-1) *n)
// }
// console.log(fact(90))

// let sum =function(i,m)
// {
//     while(i>0)
//         {
//             rem=i%10;
//             m=m*10+rem;
//             i=Math.floor(i/10);
//         }
//         console.log(m)
// }
// sum(39,0) 
