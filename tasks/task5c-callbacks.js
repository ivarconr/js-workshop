//Online version: http://jsfiddle.net/ivarconr/v2meK/
$(document).ready(function(){
    //Task: find the max of a and b and call the callback with that value as input.
    var findMax = function(a, b, callback) {

};
    
    module("Functions: Callbacks");
    test("Verify findMax calls back with max value", function() {
        var callbackCalled = false;
        findMax(100, 2, function(max) {
            equal(max, 100);
        });
        ok(callbackCalled, "should call the callback function");

        findMax(0, 2, function(max) {
            equal(max, 2);
        });

        findMax(101, 102, function(max) {
            equal(max, 102);
        });
        findMax(1, 1, function(max) {
            equal(max, 1);
        });
    });
});
