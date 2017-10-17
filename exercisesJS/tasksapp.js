function createTask(title, completed){
    var task = {
      title: title,
      completed: completed
    }
    return task
}


var tasks = []

var input = "add walk cat" 
// var newTask = createTask(title, false)

tasks.push(newTask) 

function forEachElem(arr, callback){
    for (var i = 0; i < arr.length; i++){
        callback(arr[i], i)
    }
}

// tasks.push(createTask("walk cat", true))
// tasks.push(createTask("do laundry", false))

forEachElem(taskArr, function(task, i){
    console.log((i + 1) + '. ' + task.title + '. Completed: ' + task.completed)
  })

  function completeTask(index) {
    taskArr[index].completed = true
  }

  var myBool = true
  myBool = !myBool
  // myBool's value is `false`
  myBool = !myBool
  // myBool's value us `true` again

  function toggleCompleted(index) {
    taskArr[index].completed = !taskArr[index].completed
  }


  var tasks = []

  var input = 'add buy milk'
  var inputArr = input.split(' ')

  var description = inputArr.slice(1).join(' ')

  var newTask = createTask(description, false)

  taskArr.push(newTask)
  logTasks(taskArr)


var input = 'toggle 0'
var inputArr = input.split(' ')


if (inputArr[0] === 'toggle') {
    var index = Number(inputArr[1])
    if (tasks[index] === undefined){
      console.log('an element at that index does not exist')
    } else {
      toggleCompleted(index)
    }
  }


  var readline = require('readline');
    
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

rl.on('line', function(input) {
    clear()
    

    })

console.log('type something')