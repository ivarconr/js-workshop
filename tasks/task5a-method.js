//Online version: http://jsfiddle.net/ivarconr/dv4nS/
$(document).ready(function(){
    //Task: Add a getFullName method to the person object. 
    var person = {
        firstName: "Ivar",
        familyName: "Østhus"

    };
    
    module("Functions: Method");
    test("Verify getFullName method", function() {
        ok(person.getFullName);
        equal(person.getFullName(), "Ivar Østhus");
    });

});
