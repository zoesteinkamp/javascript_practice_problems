//Using the JavaScript language, have the function PrimeTime(num) take the num parameter
//being passed and return the string true if the parameter is a prime number, otherwise
//return the string false. The range will be between 1 and 2^16.


value = 19 //return true

function PrimeTime(value) {
    for(var i = 2; i < value; i++) {  // okay so this is pretty basic function, a prime number can only be divisible by one
        if(value % i === 0) {       // so we start at 2, and if we find another number that is divisible then its not prime
            return false;   // so we return false
        }
    }
    return value > 1;
}

//Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter
//being passed and return the string true if the parameter is a palindrome, (the string is the same
//forward as it is backward) otherwise return the string false. The parameter entered may have punctuation
//and symbols but they should not affect whether the string is in fact a palindrome. For example:
//"Anne, I vote more cars race Rome-to-Vienna" should return true.


function PalindromeTwo(str) {
var backwards=str.split('').reverse().join('').replace(/\s+/g, '');
var other = str.replace(/\s+/g, '');
if(backwards===other){
    return true
}else{
    return false
  }
}
PalindromeTwo("a war at tarawa") // returns true



//Using the JavaScript language, have the function ArithGeoII(arr) take the array of
//numbers stored in arr and return the string "Arithmetic" if the sequence follows an
//arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the
//sequence doesn't follow either pattern return -1. An arithmetic sequence is one where
//the difference between each of the numbers is consistent, where as in a geometric sequence,
//each term after the first is multiplied by some constant or common ratio. Arithmetic example:
//[2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as
//parameters, 0 will not be entered, and no array will contain all the same elements.


function ArithGeoII(arr){
  if(arr[i+1]-arr[i]===arr[i+2]-arr[i+1]){
    console.log(geo)
  }else if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
    console.log(ar)
  }else{
    return -1
  }

}
ArithGeoII([2,4,6,8])
