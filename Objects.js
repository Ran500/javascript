/*
 

                All Style For Objects   

*/

/* [ =========================================================================================== ] */

/* 
                        [  Objects  ]



    Examples :. 


*/



// 1


// Create an object:
var car = {type:"Honda", model:"2009", color:"white"};

// Display some data from the object:
document.getElementById("Test1").innerHTML =  car.model;



// 2

// Create an object:
var person = {
    firstName: "Ran",
    lastName: "Done",
    age: 90,
    eyeColor: "blue"
  };
  
  // Display some data from the object:
  document.getElementById("Test2").innerHTML = person.firstName+ " " + person.age;




// 3

// Create an object:
var Test = {
    color:"Black",
    Model:"2010",
    jop:"IT"
  };
  
  // Display some data from the object:
  document.getElementById("Test3").innerHTML = Test["jop"];





// 4



var TestFun = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  
  document.getElementById("Test1").innerHTML = person.fullName();














var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object