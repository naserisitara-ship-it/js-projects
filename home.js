const number =18;
// condition,if
// if(number ===15){
//     console.log("The number is equal to 10")
// }
// else{
//    console.log("The number is  not equal to 18")
// }
let yourName = "Selina Gomies";
if(yourName==="Selina Gomies"){
    console.log("Hi Slina Gomies")
}
  else if
    ("yourName ===Helina"){
        console.log("Hi Helina")
 }
 else if("yourName ===Fatima"){
    console.log("Hi Fatima")
 }
else{
    console.log("We dont know you")
}
let Adad =85;
if(Adad%2 ==0){
    console.log("The Number is equal to 85")
}
else{
    console.log("the number is even")
}
// and,or,not;
// &&,||,!;
const name ="Zohra"
const lastName ="Hussaine";
if(name ==="Zohra" && lastName === "Hussaine"){
    console.log("Welcome in this WEB Zohra Hussaine")
}
else{
    console.log("You cant arrive in this WEB")
}
 const enterdEmail = prompt("Enter your email")
 const enterdPassword =prompt("Enter your Password")
const correctEmail  = "Naseri@gmail.com";
const correctPassword = "1253";
if(enterdEmail===correctEmail && enterdPassword===correctPassword){
    console.log("Welcome,you have arrive luckliy")
}
else if(enterdEmail ===correctEmail && enterdPassword !==correctPassword){
    console.log("Your password is worng")
}
else if(enterdEmail !== correctEmail &&enterdPassword=== correctPassword){
    console.log("Your Email is worng")
}
else{
    console.log("Your Email and your password is the both worng")
}
const score = prompt("Please enter your number")
    if (score>= 90 || score<=100){
        console.log("Successfuli,Group A")
}
 else if(score>= 80){
    console.log("successfuli,group B")
 }
else if(score>=70){
    console.log("successfuli Group C")
}
else if(score===60){
    console.log("you are fail")
}
// Caonditional strucher
// Switch,if
const userName ="Mohammad";
switch(userName){
    case "Mohammad":
    console.log("Hi Mohammad")
    break;
    case"Ali":
    console.log("Hi Ali")
    break;
    case "Sina":
        console.log("Hi Sina")
        break;
        default:
            console.log("We don't know you");
            break

}
// operator decrement opretor
// increment opretor ++ --

// for(let i=0; i<5; i++){
//     console.log("Hi dear");
// }
// const n = prompt("Enter a number to creat amliplication table");
// for(let m = 1;m,m<=10; m++){
//     console.log(m+number)
// }

// assigment opretor
for(let i = 0;i<10;i+=2){
    console.log(i);
}
// let total = 0;
// for(let s = 0; i<=80;s++){
//     total+s;
//     console.log("total");

// }
// loop,for,while
// let i = 0;
// while(i<=100){
//     total =total + i;
//     i++
// }
// console,log(total);
let j =0;
while(j<7){
    console.log(j);
    j++;
}
let m = 0;
do{
    console.log("Hello");
    m++
}while(m<90)
    // fanction mens work
    // fancton languge programing
    function sum(){
        console.log(4*2);
    }
    sum();
    // hoisting=>decler, it is not important where to call
    function add(Number1,number2,number3){
        console.log(Number1+number2+number3)

    }
    add(54,32,78)

    const h1 = document.getElementById("h1");
    const btn = document.getElementById("btn")
    btn.addEventListener("click", ()=>{
        h1.innerHTML ="This is just for practice"
    })
    const ahwalporsi = function(name){
        return"how con helpe you"+name;

    }
     const helpeToMohammad = ahwalporsi("Ali Mohammad");

   
