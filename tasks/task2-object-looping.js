//Online version: http://jsfiddle.net/ivarconr/2dUJ3
$(document).ready(function(){
    //Task: make a for-loop that loops over all the properties and concat all
    //properties to a string. 

    function loopOverAndConcatStrings(obj) {
        var result = "";        

        //for-loop

        return result;
    }
    
    module("Object-looping");
    test("Concat all string properties in object", function() {
      var obj = {
        name: 'ole',
        age: 22,
        position: 'manager'
      };

      equal(loopOverAndConcatStrings(obj), "olemanager", "should concat strings");
    });

});
