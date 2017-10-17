function useCallback(callback){
    return callback(2, 1)
 }
 
 function add(num1, num2){
    return num1 + num2
 }
 
 console.log(useCallback(add))