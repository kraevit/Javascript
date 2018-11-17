(function IIFE() {

  // Prototype Chain - DON'T do this!
  
  var person = {
    firstname: 'Default',
    lastname:  'Default',
    getFullName: function() {
      return this.firstname + ' ' + this.lastname;
    }
  };
  
  var john = {
    firstname: 'John',
    lastname: 'Doe'
  }
  
  // DON'T DO THIS EVER! For demo purposes ONLY!!!
  // Otherwise it will cause PERFORMANCE issue!!!!!!!
  john.__proto__ = person;
  
  // here we have access to getFullName() method of person obj, because of linked prostotypes.
  console.log( john.getFullName() );
  
  // here we have access only to john's firstname prop, because it overwrites firstname prop of the person obj.
  console.log( john.firstname ); 
    
})();
