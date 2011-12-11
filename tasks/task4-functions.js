//Online version: http://jsfiddle.net/ivarconr/RCAM5/
$(document).ready(function(){
    //Task: Create a function "add" that multiply argument a and b. 

    //Function here
    
    module("Functions");
    test("Add function", function() {
      equal(add(0,1), "0");
      equal(add(2,1), "2");
      equal(add(2,2), "4");
      equal(add(1000,3), "3000");
    });
});
