// Prototypes - WE USE PROTOTYPES to Attach single function to a OBJect, otherwise if we have 1000000 instaces of an obj
// we will have also 10000000 copies of the same func wich is not we want!!!!!!

function Car(id) {
	this.carId = id;
}

Car.prototype.start = function() {
	console.log( 'start: ' + this.carId );
};

let car = new Car(101);
car.start(); // output: start: 123

// Expanding Objects ( String.prototype )
String.prototype.hello = function() {
	return this.toString() + ' Hello';
};

console.log( 'foo'.hello() ); // foo Hello
