//Online version: http://jsfiddle.net/ivarconr/mVPtS/
$(document).ready(function(){
    //Task: Assign the properties: name, age and gender to the person object 
    //in three _different_ ways.
    var person = {

    };

    module("Objects");
    test("Person should have three properties set", function() {
      equal(person.name, "ivar", "We expect person to have name: ivar" );
      equal(person.age, 26, "We expect person to have age: 26" );
      equal(person.gender, 'male', "We expect person to gender: male" );
    });

});
