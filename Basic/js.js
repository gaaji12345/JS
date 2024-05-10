//-litral based arrays

var myName=['gaaji','kasun','chitha'];

myName[2];

//function based

var ages=new Array(10,20,30);


//loops

// for (var i=0;i<10;i++){
//     console.log(i+1);
// }

// var i=0;
// while (i<10){
//     i++;
//     console.log(i)
// }

// var i=0;
// do {
//
//     console.log(i+1);
//     i++;
// }while (i<10);

var array=[10,20,30,40,50];

// for (let i = 0; i < array.length; i++) {
//      console.log(array[i]);
// }

///for of ->array values to the variable
// for (var i of array){
//     console.log([i]);
// }

//for in -> array eke index numbers
for (var i in array){
    console.log([i]+",");
}


//controll stutures

var i=10;
// if (i<20){
//     console.log("small");
// }else if (i<=10){
//     console.log("same");
// }else {
//     console.log("no")
// }

// switch (i) {
//     case 1:console.log("hiii");;break;
//     case 10:console.log("goo");break;
// }


//Expresion
let muage=function (){
    return 30;
}

function  msg(c1,c2){
    return c1()+c2;
}

function my(){
    return"ME";
}

let o=msg(my,"Gaaji");
console.log(o);

//return function in function

function getMyData(){
    return function getdata()
    {
        console.log("My name")
    }
}

getMyData()();