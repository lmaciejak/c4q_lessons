//readline stuff
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}
/////////////////



var tasksArr= []

// Functions
function createTask(title, completed) {
    var task = {
        title: title,
        completed: completed
    }
    return task
}

function logTasks(tasksArr){
    for (var i = 0; i < tasksArr.length; i++){
      console.log(i + '. ' + tasksArr[i].title + '. Completed: ' + tasksArr[i].completed)
    }
  }

  function logFalseTasks(tasksArr){
    for (var i = 0; i < tasksArr.length; i++){
        if(tasksArr[i].completed === false){
        //console.log("entered logfalse")
            console.log(i + '. ' + tasksArr[i].title + '. Completed: ' + tasksArr[i].completed)
        }
    }
  }

  function logTrueTasks(tasksArr){
    for (var i = 0; i < tasksArr.length; i++){
        if(tasksArr[i].completed === true){
            console.log(i + '. ' + tasksArr[i].title + '. Completed: ' + tasksArr[i].completed)
        }
    }
  }

  function toggleCompleted(index) {

    tasksArr[index].completed = true
  }

    

rl.on('line', function (input) {
    clear()
    var inputArr = input.split(' ')
    var command = inputArr.shift()
    var completed = inputArr.pop()
    var title = inputArr.join(' ')

   // console.log(tasks)

    if (command === 'ADD') {
        tasksArr.push(createTask(title, completed))
       // logtasksArr(tasksArr)
    }  
    else if (command === 'toggle'){ //does not work 
        toggleCompleted(inputArr[0])=
    }

    else if(input === 'show all'){ 
        logTasks(tasksArr)
    }
    else if(input === 'show active'){ 
        logFalseTasks(tasksArr)
    }
    else if(input === 'show completed'){
        logTrueTasks(tasksArr)
    }     //clear()
    console.log('Type a command-------------------------------')

})

console.log('type something')

