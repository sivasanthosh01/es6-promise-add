let num1=parseInt(prompt("Enter the 1st Value"));
let num2=parseInt(prompt("Enter the 2nd Value"));
let num3=parseInt(prompt("Enter the 3rd Value"));

let promise1=new Promise(function(resolve,reject){
    if(num1>0){
        resolve(num1)
    }
    else{
        reject("Enter correct number")
    }
})
let promise2=new Promise(function(resolve,reject){
    if(num2>0){
        resolve(num2)
    }
    else{
        reject("Enter correct number")
    }
})
let promise3=new Promise(function(resolve,reject){
    if(num3>0){
        resolve(num3)
    }
    else{
        reject("Enter correct number")
    }
})
Promise.all([promise1,promise2,promise3]).then((arr)=>{
    console.log(arr);
    document.write(`[${arr}]<br><br>`)
    let sum=0
    arr.forEach((e)=>{
        console.log(e);
        sum=sum+e; 
    })
    document.write(`Sum of Three Numbers : ${sum}<br><br>`);
    let avg=sum/3;
    document.write(`Average of Sum : ${avg}<br>`);
})
.catch((msg)=>{
    document.write(msg);
})
