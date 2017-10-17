/*
var num = 1
if (num > 2) {
    console.log('it\'s larger than 2')
} 
console.log('we\'re done') 
*/


/*console.assert(cat_count !== 'number', "cat_count is not defined"); 
cat_count += 1;

if (cat_count === 1) {
    console.log('there is a single cat')
} else if (cat_count < 1) {
    console.log('no cats')
} else if (cat_count === 2) {
    console.log('there are a couple of cats')
} else if (cat_count > 1) {
    console.log('there are many cats')
} */

/*
var cat_count = 1 


console.assert(typeof(cat_count) === 'number', "cat_count is not a number"); 


if (cat_count === 1) {
    console.log('there is a single cat')
} else if (cat_count < 1) {
    console.log('no cats')
} else if (cat_count === 2) {
    console.log('there are a couple of cats')
} else if (cat_count > 1) {
    console.log('there are many cats')
}
*/

//depending on age, it says alcohol sales is permitted or not
//don't be too defensive below
/*var age = 'a';
console.assert(age !== undefined && typeof(age) == 'number',"please enter age");

if (age < 21) {
    console.log("sale is not permitted");
} else {
    console.log("sale is permitted");
} */

//but no sales on Sunday
/*
var age = 21;
var day_of_week = "monday"
day_of_week = day_of_week.toLowerCase(); 

console.assert(day_of_week === 'monday' 
            || day_of_week === 'tuesday' 
            || day_of_week === 'wednesday' 
            || day_of_week === 'thursday' 
            || day_of_week === 'friday' 
            "should be a day of the week") 

if (age < 21) {
    console.log("sale is not permitted");
} else if (age >= 21 && day_of_week === "sunday") {
    console.log("sale is not permitted on Sunday");
} else {
    console.log("enjoy")
} 
*/

// count of dogs and in case there is none, print "where is luna"
/*
var dogs = 0; if (dogs >= 1) {
    console.log("there are dogs")
} else {
    console.log("where is luna?")
}
*/
/*
var dog_count; 

if (!dog_count) {
    console.log('Where is Luna?');
}
*/

// given a day of the month (as a number)
//print out day of the week (as a text, example Monday)
// September 2017 so friday is 1 

/*
var day = 28

if (day === 3 || day === 10 || day === 17 || day === 24) {
    console.log("September " + day + " is on a Sunday.")
} else if (day === 4 || day === 11 || day === 18 || day === 25) {
    console.log("September " + day + " is on a Monday.")
} else if (day === 5 || day === 12 || day === 19 || day === 26) {
    console.log("September " + day + " is on a Tuesday.")
} else if (day === 6 || day === 13 || day === 20 || day === 27) {
    console.log("September " + day + " is on a Wednesday.")
} else if (day === 7 || day === 14 || day === 21 || day === 28) {
    console.log("September " + day + " is on a Thursday.")
} else if (day === 8 || day === 15 || day === 22 || day === 29) {
    console.log("September " + day + " is on a Friday.")
} else if (day === 9 || day === 16 || day === 23 || day === 30) {
    console.log("September " + day + " is on a Saturday.")
} */
//other type
/*var day = 22; 

var remainder = day % 7; 

if (remainder === 1){
    console.log("It is Friday");
}
else if(remainder === 2){
    console.log("It is Saturday")
}
else if(remainder === 3){
    console.log("It is Sunday")
}
else if(remainder === 4){
    console.log("It is Monday")
}
else if(remainder === 5){
    console.log("It is Tuesday")
}
else if(remainder === 6){
    console.log("It is Wednesday")
}
else if(remainder === 7){
    console.log("It is Thursday")
} */

/*var day = 2; 
var weekday = day % 7;  

switch (weekday) {
    case 1: 
        console.log('Friday'); 
        break; 

    case 2: 
        console.log('Saturday'); 
        break; 

    case 3: 
        console.log('Sunday'); 
        break; 
} */



