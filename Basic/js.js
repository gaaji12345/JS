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

// function Item(){
//     this.id="I001";
// }
// var  i2=new Item();
// i2.id;

var customer={
    id:'C001'
}

function  Vehical(model,year){
    this.model=model;
    this.year=year;
    this.park=function (){
        return  this.model+ "-"+this.year+"is going to park";
    }
}


// var v1=new Vehical("Benz",2023);
// var res =v1.park();
// console.log(res)

function  Car(model,year){
  Vehical.apply(this,arguments);
}


Car.prototype=Object.create(Vehical.prototype);
Car.prototype.constructor=Car;

var v1=new  Vehical();
var c1=new Car("Toyota",2021);
var re= c1.park();
console.log(re);




// Car.prototype=Vehical.prototype;
//
// var c=new Car();

//-----------------EX2--------------//

function Animal(id,name){
    this.id=id;
    this.name=name;
    this.cry=function (){
       return this.id+ "-"+this.name+"=/ is crying...!"
    }
}

function Cat(id,name){
    Animal.apply(this,arguments);//cat eken ob ekak haduowth super ekak widiyata tenayna animal ekath ywana

}

Cat.prototype=Object.create(Animal.prototype);
Cat.prototype.constructor=Cat;


var cat1=new Cat("C001","GAAJI");
var catp=cat1.cry();
console.log(catp);


var a1=new Animal("C002","Zrba");
var a2=a1.cry();


console.log(a2);

// Cat.prototype.tail=100;



//tHis is a function
//easy way use extends

class Backery{
    constructor(i,n) {
        this.i=i;
        this.n=n;
    }

    pa(){
        return this.i+"-"+this.n+"-Gaaaaaa";
    }
}

// var  v=new Backery("V001","Nawo");
// v.pa();

class B extends Backery{
    constructor(i,n) {
      super(i,n)
    }
}




