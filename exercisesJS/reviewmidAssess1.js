//not correct below
// function firstString (arr) {
    
//     var stringValue = ' '
    
//           for (var i = 0; i <= arr.length-1; i++) {
    
//                if( typeof(arr[i]) !== 'string') { 
    
//                    return undefined 
    
//                   } 
    
//                 else if (stringValue === ' ') {
    
//                   stringValue += arr[i] 
    
//                   }
    
//             }
    
//           return stringValue 
    
//     }
//     console.log(([3, 7, 'banana', 'kierkegaard']))


//correct answer 
function firstString (arr ) {
    for ( i = 0 ; i < arr.length ; i ++ ){
      if (typeof arr[i] === 'string' ) {
           return arr[i]
         }    
    }
         return undefined
    }

    //don't return undefined in loop 