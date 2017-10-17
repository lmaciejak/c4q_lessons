// var cat = {
//     name: 'Whiskers',
//     words: 'meow meow',
//     talk: function () {
//         console.log(this.words);
//     }
// }

// cat.talk()

// // we are learning new way to make objects 

// function Dog(name, breed, weight) {
//     // this = {}
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     //return this
// }

// var pluto = new Dog("Charlie", "Mixed", 38)
// console.log(pluto.name)


// //every function has name as property?
// //every function has prototype preoperty which is an empty object 

// function add1(num) {
//     return num + 1; 
// }
// console.log(add1.prototype)

// function Rabbit(type) {
//     this.type = type;
//   }
  
//   var killerRabbit = new Rabbit("killer");
//   var kr = {
//       type: 'killer'
//   }
//   var blackRabbit = new Rabbit("black");

//   console.log(killerRabbit)
//   console.log(kr)

  //******remember difference between killerrabbit and kr when logged @*/
  //if object and prototype has a method, prototype method doesn't matter

  //function with capital letter means it is meant to use as a constructor function 
  //convention: give params names similar to names of the properties 

  /////////
// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }

// var charlie = new Dog("Charlie", "Mixed", 38)
// console.log(charlie)

// var charlie = new Dog("Charlie", "Mixed", 38);
// var sergeant = new Dog("Sergeant", "Newfoundland", 140);
// var alice = new Dog("Alice", "Golden Retriever", 60);

// var dogs = [charlie, sergeant, alice];
// for(var i = 0; i < dogs.length; i++) {
//    // console.log(dogs[i].name + " is a " + dogs[i].weight + " lb " + " " + dogs[i].breed);
// }
// console.log(dogs)

// console.log(new Date().toString())

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
var v3 = new Vector(3, 4)

  function Vector(x,y){
    this.x = x;
    this.y = y;
}

  Vector.prototype.plus = function(vector) {
   resultVector = new Vector((this.x + vector.x), (this.y + vector.y))
   return resultVector
};

 Vector.prototype.minus = function(vector) {
    resultVector = new Vector((this.x - vector.x),(this.y - vector.y))
    return resultVector
};
    


Vector.prototype.getLength = function(vector) {    
    return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)))
}; 


console.log(v1.plus(v2));
//   => Vector {x: 3, y: 5}
  console.log(v1.minus(v2));
//   => Vector {x: -1, y: -1}
  console.log(v3.getLength());
  // => 5



  //another way to write this
  var v1 = new Vector(1, 2)
  var v2 = new Vector(2, 3)
  var v3 = new Vector(3, 4)
  
    function Vector(x,y){
      this.x = x;
      this.y = y;
  }
  
    Vector.prototype.plus = function(otherVector) {
     var newX = this.x + otherVector.x
     var newY = this.y + otherVector.y
     return new Vector(newX, newY)
  };

  
  
  Vector.prototype.getLength = function(vector) {    
      return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)))
  }; 