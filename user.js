// function Click() {
//     let arr = JSON.parse(localStorage.getItem(`name`)) || [];
//     let value = document.getElementById(`name`).value;
//     arr.push(`${value}`);
//     localStorage.setItem("name", JSON.stringify(arr));

// }

// function Show() {
//     let arr = JSON.parse(localStorage.getItem(`name`))
//     html = "";
//     arr.forEach((a, b) => {
//         html += `<li> ${a}</li> <button onclick="edite(${b})">Edite</button> <button onclick="deletes(${b})">Delete</button> `
//     })
//     let show = document.getElementById("print")
//     show.innerHTML = html
// }

// function Edite(index) {
//     let arr = JSON.parse(localStorage.getItem(`name`))
//     let edites = prompt("Edite Your UserName..", arr[index]);
//     arr[index] = edites;
//     localStorage.setItem("name", JSON.stringify(arr))
//     Show();
// }

// function deletes(index){
//     let arr = JSON.parse(localStorage.getItem(`name`))
//     arr.splice(index,1);
//     localStorage.setItem("name", JSON.stringify(arr));
//     Show();
// }






// function longestWord(sentence) {
//     const words = sentence.split(" "); 
//     let longest = "";                  
  
//     for (let word of words)
        
//  {        
//       if (word.length > longest.length) {
//         longest = word;               
//   }
//     }
  
//     return longest;                   
//   }
  


// console.log("Welcome");
// setInterval(()=>{
//     console.log("welcome Bro",)
// },2000)



// console.log("hii")
// setTimeout(()=>{
//     console.log("new")
// },2000)



// let i =1;
// let more = setInterval(()=>{
//     console.log("welcome bro "+i)
//     i++;
// },1000)

// setInterval(()=>{
//     clearInterval(more)
// },5000)



// let obj1 = {
//     name:"Pavan Raj",
//     age:"23" 
// }
// let obj2 = {
//      course:"mern",
// }
// let obj3 = {...obj1,...obj2}
// console.log(obj3)


// let obj1 = {
//     name:"Pavan raj",
//     age:"31"
// }
// let obj2 = {
//     ...obj1,
//     course:"mern",
// }
// console.log(obj2)




// let obj1 = {
//     name1:"pavan ",
//     role:"mamber",
//     age:"21"
// }
// let obj2 = {
//          course:"mern",
//     }
// let {name1,age,} = obj1;
// console.log(name1,age)



// let arr = [1,3,4,6]
// let arr1 = [8,56,87]
// let [a, ,c] =arr1;

// console.log(a,c)

// console.log(this)




// function longest(arr){
//     const word =arr.splite("")
//     let long =""
//     for (let newword of word){

//     }
// }





// let obj ={
//     name:"Pavan Raj",
//     new :function(){
//         const arrow=()=>{

      
//         console.log(this.name)
//         }
//        arrow();
//     }
// }
// obj.new();


// let obj ={
// name:"pavan Raj",
// new:function(){
//     console.log(this.name)
// }
// }
// obj.new();



// function myName(name,city){
//     console.log(`My Name is ${name} I am from ${city} and my age is ${this.age}`)


// }
// const obj ={
//     age:"24"
// }
// myName.call(obj,"pavan raj","Kollam")
// myName.apply(obj,["pavan raj","Kollam"])





function myName(name,city){
    console.log(`My Name is ${name} I am from ${city} and my age is ${this.age}`)


}
const next = myName.bind({age:23});
next("pavan raj","kollam")