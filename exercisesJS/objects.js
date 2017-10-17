//"c4q"[1] ==> "4"
//[1,2,3][2] ==> 3

// console.log(o['quantity']); 
// console.log(o.quantity)
// console.log(o.name)

//since the apples are not in any kind of sequence do not use for loop 

// var apple1 = {quantity:56, name:'Gala'}; 
// var apple2 = {quantity: 99, name: 'Granny Smith'}
// var apple3 = {quantity: 1, name: 'Pink Delicious'}



// var apples = [
//     {quantity:56, name:'Gala',price: 0.50, weight:0.33},
//     {quantity: 99, name:'Granny Smith', price: 0.50, weight:0.33},
//     {quantity: 1, name:'Pink Delicious',price: 0.50, weight:0.33}
// ]; 

// function howManyApples(a) { 
//     var total = 0
//     for (var i = 0; i < a.length; i++) {
//         total+= apples[i].quantity
//     } 
//     return total; 

// }
// console.log('Number of other apples:' + howManyApples(apples))




// var rooms = [
//     {
//         price: 200,
//         location: '1 Broadway, NY',
//         maxOccupants: 3,
//         amenities: ['washer/dryer', 'wifi', 'cable']
//     },
//     {
//         price: 100,
//         location: '11 Delancey, NY',
//         maxOccupants: 1,
//         amenities: []
//     },
//     {
//         price: 2000,
//         location: '1 Park Pl, NY',
//         maxOccupants: 2,
//         amenities: ['pool', 'valet', 'butler', 'dog walker']
//     }
// ]; 

// //make the string exactly as long as length 
// function padTo(str, len) {
//     if(str.length > len) {
//         return str.slice(0,len-1) + '...'; 
//     }
//     else if(str.length ===len){
//         return str;
//     } else {
//         // spacesNeeded = len - str.length; 
//         // for (var i = 0; i < len - str.length; i++) {
//         //     str += ' ';
//         // }
//         while (str.length < len) {
//             str += ' '
//         }
//         // console.log('length of str', str.length)
//         return str;
//     }
// }
// // \t 

// function whatsAvailable(rooms){
//     for (var i = 0; i < rooms.length; i++) {
//         console.log(
//             padTo(rooms[i].location, 20)
//             padTo(rooms[i].location, 20),
//             ' ', 
//             rooms[i].price); 
//     }
// }
// whatsAvailable(rooms); 



//Airbnb homepage, detail page, reservation page 
//AirBnb 0.0.1


// q 1 
// Create an object to hold information on your favorite recipe. 
// It should have the following properties: title, number of servings, 
// and ingredients (an array). Create a function that logs the recipe 
// information, so it looks like this:

// var recipe = {
//         name: 'Mole',
//         numberOfServings: 2,
//         ingredients: ['cinnamon','cumin','cocoa']
//     };

// function logRecipe(obj) {
//     console.log('name:',recipe.name)
//     console.log('servings:', recipe.numberOfServings)
//     console.log('ingredients:', recipe.ingredients.join(","))
// }
// logRecipe(recipe)

// var recipe = {
//     name: 'Mole',
//     numberOfServings: 2,
//     ingredients: ['cinnamon','cumin','cocoa']
// };


// var recipe = {
//     name: 'Mole',
//     numberOfServings: 2,
//     ingredients: ['cinnamon','cumin','cocoa']
// };

// function listOfFavRec(object) {
//     for (var key in object) {
//       if (Array.isArray(object[key]) === true) {
//         console.log(key +": \n"  + object[key].join(' > '));
//       } else {
//         console.log(key + ": " + object[key]);
//       }
//     }
//   }
//   listOfFavRec(recipe)

// function logRecipe(obj) {
// console.log('name:',recipe.name)
// console.log('servings:', recipe.numberOfServings)
// console.log('ingredients:', recipe.ingredients.join('n/'))
// }
// logRecipe(recipe)


//q2
// var recipe = [
//     {
//     name: 'Mole',
//     servings: 2,
//     ingredients: 'cinnamon > cumin > cocoa'
//     }   
// ]

// function prettyLog(obj) {
//     console.log("name:", obj.name)
//     console.log("servings:", obj.servings)
//     console.log("ingredients:", obj.ingredients)
// }

// console.log(prettyLog(recipe))



//q3

// Write a function getProps that takes an object as an argument and returns 
// all the keys of that object in an array.

// function getProps(obj) {
//     console.log(Object.keys(obj))
// }


// var cat = {
//     family: 'Felidae',
//     genus: 'Felis',
//     species: 'Catus' 
//   }
  
// function getObjLength(object) {
// 	var count = 0;
// 	for (var key in object) {
// 		count++;
// 	}
// 	return count;
// }


// console.log(getObjLength(cat))

// //q5
// var films = [
//     { 
//        title: 'Moonlight Kingdom',
//        director: 'Wes Anderson',
//        alreadyWatched: false
//      }, { 
//        title: 'Nightmare before Christmas',
//        director: 'Tim Burton',
//        alreadyWatched: true
//      }
//   ]
  
//   function logFilms(films) { 
//     for (var i = 0; i < films.length; i += 1) {
//        if (films[i].watched) {
//          console.log('You already watched ' + films[i].title + ' by ' + films[i].director)
//        } else { 
//          console.log('You still need to watch ' + films[i].title + ' by ' + films[i].director)
//        }
//      }
//   }



//q6
//Let's put everything together by building a small todo list program. Here are the steps:
// Decide what each todo task will look like: create a javascript object with at 
// minimum the properties description and completed
// Create a todos array to hold all todo objects.
// Create a function that adds a todo to the todos array.
// Create a function that shows all todos.
// Create function that marks a todo as completed (based on the index number).


// var list = {
//     description: '',
//     completed: ' '
// }
// var toDoArray = []
// var newItem = 'buy coffee'
// function addToDo (str) {
//     toDoArray.push(newItem)
// }


//cam't compare 2 objects by putting triple equals with the 2 variables 
// object getter and setter????



// var o1 = {
//     name: 'O',
//     type: 'pear'
// }

// function copyObject(o) {
//     var result = {};
//     for (var key in o) {
//         console.log('Key:',key, ' o[key]', result[key] = o[key])
//     }
   
//     return result; 
// }

// var o2 = copyObject(o1) 

// console.log(o1)
// console.log(o2)
// console.log(o1 === o2)




//on object slice doesn't make any sense 


// var o1 = {
//     name: 'O', 
//     type: 'pear'
// }

// //below is a setter
// o1.type = undefined 
// console.log(o1)



//below how to get age 





// var people = {
//     person1: {
//     firstName: 'Erika',
//     lastName: 'Kim',
//     age: 25
//   },

//     person2: {
//     age: 27,
//     firstName: 'Jo',
//     lastName: "Jose"
//   }
// }

// function ages(p) {
//     for(var key in p) {
//         console.log(p[key].lastName)
//     }
// }

// //people.person2.lastName = 'Kanye'
// //ages(people)

// function marriage(maidenName, marriedName, p) {
//     for (var key in p)
//         if(maidennName === p[key].lastName) {
//             p[key].lastName = marriedName
//             p[key].maidenName = maidenName
//         }
//     }
// }
// marriage('Jose', 'Calderon', people)


// console.log(people)



//q6 

var todoArr = [
{
    description: 'buy groceries',
    completed: false
},
{
    description: 'walk the dog',
    completed: true
},
{
    description: 'study for assessment',
    completed: true
}
];

function addToDo (array) {
    var object = 
{
    description: 'cook dinner', 
    completed: false
}
var pushed = array.push(object); 
return array 
}
console.log(addToDo(todoArr))

function showToDo (array) {
    for(var i = 0; i < array.length; i++) {
        var object = array[i]
        var completed = object.completed
        var description = object.description
        
        if(completed === false) {
            console.log(description)
        }
    }
}

showToDo(todoArr)

function markCompleted (array) {
    for(var i = 0; i < array.length; i++) {
        var object = array[i]
        var completed = object.completed
        var description = object.description

        if(completed === true) {
            console.log(i+1 + ".Completed:   " + description)
        }
    }
}
markCompleted(todoArr)