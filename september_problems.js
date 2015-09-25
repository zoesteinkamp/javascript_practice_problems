//Using the JavaScript language, have the function ArithGeo(arr)
//take the array of numbers stored in arr and return the string "Arithmetic"
//if the sequence follows an arithmetic pattern or return "Geometric" if it
//follows a geometric pattern. If the sequence doesn't follow either pattern
//return -1. An arithmetic sequence is one where the difference between each
//of the numbers is consistent, where as in a geometric sequence, each term after
//the first is multiplied by some constant or common ratio. Arithmetic example:
//[2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered
//as parameters, 0 will not be entered, and no array will contain all the same elements.

//So for this problem i was stumped so i went to google, and found this stackoverflow example, explaning that
//there is a simple and less crazy way to solve this problem.
//http://stackoverflow.com/questions/18285219/determine-if-array-is-arithmetic-or-geometric-progression-from-coderbyte

function ArithGeo(arr) {
for(var i = 0; i < arr.length - 1; i++)
{
    if( arr[i + 1] - arr[i] !== arr[1] - arr[0] ){
      return "Arithmetic"
    }
    else if(arr[i + 1] / arr[1] / arr[0] !== arr[i]){
      return "Geometric"
    }else{
      return -1
    }
}
}
// The original anwser was three times as long as my shortend version. I now understand that looking at the diffrences
//in the numbers in the array is the key to finding the patterns.
