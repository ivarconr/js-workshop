//Online version: http://jsfiddle.net/ivarconr/Zx5Rx/
$(document).ready(function(){
    //Task: Fix the function to not define globals. 
    //Remember that we do not have block scoping. 
    var neatFunc = function(value) {
        if(value) {
          a = value * 10;
        } 
        return a;
    };
    
    module("Function: scope");
    test("Verify no globals", function() {
        var result = neatFunc(10);
        ok(typeof a === "undefined");
    });
});
