//Online version: http://jsfiddle.net/ivarconr/cfKuy/
$(document).ready(function(){
    //Task: Populate the array
    var a = [];
    var i;
    for(i=0; i< 10; i+=1) {
        //..
    }

    module("Array");
    test("Popolate the array", function() {
      equal(a[0], 0, "first element should have value 0");
      equal(a[2], 2, "third element should have value 2");
      equal(a[4], 4, "fift element should have value 4");
      equal(a.length, 10, "array should have 10 elements");
    });

});
