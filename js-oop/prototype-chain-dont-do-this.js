			(function IIFE( global ) {	
				"use strict";

				// PROTOTYPE CHAIN

				var person = {

					firstname: 'Default',
					lastname: 'Default',
					getFullName: function() {
						return this.firstname + ' ' + this.lastname;
					} 

				}
				
				var john = {

					firstname: 'Joe',
					lastname: 'Doe'

				}

				// don't do this EVER! For demo purposes only!!! Otherwise will cause PERFORMANCE issue!
				john.__proto__ = person;
				
				console.log(john.getFullName()); // here we have access to getFullname() of person obj, because of linked protos
				console.log(john.firstname); // here we have acces only to john obj firstname prop, because it overwrites person obj firtname prop


			})( window );
