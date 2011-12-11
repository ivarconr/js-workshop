//Online version: http://jsfiddle.net/ivarconr/6uGsx/
$(document).ready(function(){
    //Task: Complete the function so that it takes _any_ number of 
    //arguments and calculates the sum of all of them.   
    var sum = function() {
        var i, length, sum;
        length = 0; //?
        sum = 0;
        
        for(i=0; i<length; i++) {
            //sum += ?;
        }
        
        return sum;
    };
    
    module("Function: arguments");
    test("Verify sum of arguments", function() {
        equal(sum(), 0);
        equal(sum(1), 1);
        equal(sum(1, 2), 3);
        equal(sum(1, 2, 12, 1234, 11, 35, 42), 1337);
    });
});
