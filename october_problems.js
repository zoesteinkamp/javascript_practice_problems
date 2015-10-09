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

// But the obvious flaw is that this might take a bit of time to run through
