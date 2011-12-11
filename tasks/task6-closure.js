//Online version: http://jsfiddle.net/ivarconr/khgP9/
$(document).ready(function(){
    //Task: Change code to use closure to protect private model field. 

    function Car(model) {
        this.model = model;
        
        this.getModel = function() {
            return this.model;
        }
    }
    
    module("Closure");
    test("use method to access private field", function() {
      var bmw = new Car("bmw");

      ok(!(bmw.model), "Car should not have an accessable car property");
      equal(bmw.getModel(), "bmw", "getModel should return bmw");
     
      bmw.model = "test";   //change the value
      equal(bmw.getModel(), "bmw", "Model should not be changed even if we set a model property on bmw");
    });

});
