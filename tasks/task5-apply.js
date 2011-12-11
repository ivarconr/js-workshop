//Online version: http://jsfiddle.net/ivarconr/7VKMn/
$(document).ready(function(){
    //Task: Use apply to borrow toString method to produce BMW's toString. 
    var opel = {
        model: "Opel",
        maxSpeed: 180,
        toString: function() {
            return "Model: " + this.model + ", Max Speed: " + this.maxSpeed;
        }     
    };

    var bmw = {
        model: "BMW",
        maxSpeed: 250   
    };

    var bmwToString = "?";
    
    module("Functions: Apply");
    test("Apply to change method scope", function() {
      equal(bmwToString, "Model: BMW, Max Speed: 250");
    });

});
