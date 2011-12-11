//Online version: http://jsfiddle.net/ivarconr/DWM5w/
$(document).ready(function(){
    //Task: Change one line to make Student inherit getName function from Person.  
    var person = function (spec) {
        spec = spec || {};
        var that = {};

        that.getName = function () {
            return spec.name;
        };

        return that;
    };

    var student = function (spec) {
        var that = {};
        return that;
    };

    var h = student({ name: 'Ole Hansen' });
    
    module("Functional Inheritance");
    test("Inherit getName function", function() {
      equal(h.getName(), "Ole Hansen", "Student should inherit getName function from Person");
    });

});
