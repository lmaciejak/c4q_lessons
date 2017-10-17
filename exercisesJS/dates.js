// var now = new Date(1993, 4-1, 7); 

// now.setFullYear(now.getFullYear() - 1)
// console.log(now.toString()); // .to string makes date consumable for humans. number things at 0

// get date gives you day of month 
// sunday is 0 (day one) 
// don't confuse get date with get day 



// var now = new Date(); 

// now.setFullYear(now.getFullYear() - 1000)
// console.log(now.getTime());


//setfullyear sets the year 
//getfullyear gives you 2017 
//date is an object so its mutable, changing different parts of it separately 

// var now = new Date(1993, 3, 17); 

// now.setFullYear(now.getFullYear()) //one year ago 
// console.log(now.toString());

// var now = new Date(1993, 3, 17); 

// now.setDate(now.getDate() + 180) //one year ago 
// console.log(now.toString());



// var then = new Date(1993, 3, 17) 
// var now = new Date(); 

// var msPerWeek = 1000 * 60 * 60 * 24 * 7

// console.log((now.getTime() - then.getTime()) / msPerWeek);


// var start = new Date(); 
// for (var i = 0; i < 100000; i++){
//     console.log(i)
// }
// var end = new Date(); 

// console.log((end.getTime() - start.getTime()) / 1000) 

// //this was benchmarking, measuring speed of program. test run code multiple times and then
// // average the speed 



// var now = new Date(1993, 3, 17); 

// now.setMonth(now.getMonth()) //one year ago 
// console.log(now.toString());


// var date = new Date(2016, 2, 14, 03, 12);

// console.log(date.toString());


// var timestamp = Date.parse('2012-01-26T15:00:00.100Z'); //most precise way to log string
// //z means zulu time 
// var then = new Date(timestamp);

// console.log(then.toString())

//q1
// var date = new Date (2016, 2 ,14, 3, 12)
// console.log(date.toString())


// EXERCISE 

// //q2
// // Write a function getWeekDay that takes a date object as argument and returns a string 
// // with the weekday: 'Mon' 'Tue' 'Wed' 'Thu' 'Fri' 'Sat' 'Sun'.


// // var date = new Date(2012, 0, 3);  // January 3rd 2012
// // console.log(getWeekDay(date));        // should return 'Tue'

// var date = new Date(2012, 0, 3)

function getWeekDay(date){
    return date.toString().split(' ').shift()
    

}
//or do 
function getWeekDay(date){
var dateArr = date.toString().split(' ')
return datArr[0]
}
// console.log(getWeekDay(date))

//q 3
// Create a function getDateBefore that takes as arguments

// 1. date - a date object.

// 2.days - a number.

// function getDateBefore(date,num){
//     date.setDate(now.getDate() - num);
//     return date 
// }

// console.log(getDateBefore(now, 1))

// function getDateBefore(date, days) {
//     var newDate = newDate(date); 
//     setDate

//other way to do 
// function getDateBefore(date,days){
//     var currDay = date.getDate()
//     var newDate = new date(date)
//     date.setDate(currDay - days)
//     return newDate 
// }
// var date = new Date(2015, 0, 2)


// //another way this doesn't work 
// function getDateBefore(date,days){
//     var year = date.getFullYear(); 
//     var month = date.getMonth(); 
//     var day = date.getDate(); 

//     var dateBefore = new Date(year, month, day - days)
//     return dateBefore
// }
// var date = new Date(2015, 0, 2);

// console.log( getDateBefore(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateBefore(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateBefore(date, 365) ); // 2, (2 Jan 2014)

// //q 4 ////
// function getLastDayOfMonth(year, month) {
//     var day = new Date(year, month, 0).getDate();
//     return day
//     }

    
//other way 
// var getLastDayOfMonth (year, month) {
//     var date = new Date(year, month + 1,0) 
//     return date.toString(); 
// }
// console.log(getLastDayOfMonth(2012,1))

//q5 
monthsArr = ['January', 'February','March', 'April', 'May', 'June','July','August', 'September','October','November', 'December']
function nameOfMonth(date) {
return monthsArr[date.getMonth()]
}
console.log(nameOfMonth(new Date(2009, 10, 11)))
//q6 
// function getSecondsToday(){
//     return getTime();
// }

// // console.log(getSecondsToday());

// var date = new Date(2012, 0, 3)



// var date = new Date(2012, 0, 1)

// function getWeekDay(date){
//     return date.toString().split(' ').shift()
    

// }
// console.log(getWeekDay(date))

//q3 

// var now = new Date()

// function getDateBefore(date, days) {
//     var newDate = new Date(date);
//     newDate.toString()
//     newDate.setDate(newDate.getDate() - days)
//     return newDate.getDate()
// }
// console.log(getDateBefore(now, 7))


//q4 //////////////////////////////


// function getLastDayOfMonth(year, month) {
//     var day = new Date(year, month, 0).getDate();
//     return day
// }

// //July
// console.log(getLastDayOfMonth(2017, 10)); 


//q5
// Write a JavaScript function that takes a date object 
// as argument and returns the name of the month.

// monthsArr = ['January', 'February','March', 'April', 'May', 'June','July','August', 'September','October','November', 'December']
// function NameOfMonth(date) {
//     return monthsArr[date.getMonth()]
   
// }

// console.log(NameOfMonth(new Date(2009, 10, 1)));

//q6
// function getSecondsToday(date) {
//     var msPassed = 
// }

// function getSecondsToday(){
//     var dt = new Date(); 
//     var secs = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours());
//     return secs
// }
// console.log(getSecondsToday())

// //q7
function getSecondsToTomorrow(){
var secInDay = 24 * 60 * 60 
var dt = new Date()
var secsPassed = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours())
return secInDay - secsPassed
}
// console.log(getSecondsToTomorrow())


//another way to do this 

function getSecondsToTomorrow(){
    var today = new Date()
    var endDay = new Date()
        endDay.setHours(24, 0, 0)
    return (endDay - today)/1000
}
console.log(getSecondsToTomorrow())