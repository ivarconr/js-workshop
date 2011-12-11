//Online version: http://jsfiddle.net/ivarconr/ptVyA/
$(document).ready(function(){
    //Task: Complete the Person function so that it takes the two paramethers 
    //passed and assignes it to object properties name and age. 
    var Person = function() {

    };
    
    module("Functions: Constructor invocation");
    test("Verify Person constructor function", function() {
        var santa = new Person("Santa Claus", 100);
        
        equal(santa.name, "Santa Claus");
        equal(santa.age, 100);
    });
});
