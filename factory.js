function CarMaker(){}

CarMaker.prototype.drive = function(){
    return "Vroom, I have " + this.doors + " doors";
};

CarMaker.factory = function(type){
    var constr = type, newcar;
    
    if(typeof CarMaker[constr] !== "function"){
        throw {
            name: "Error",
            message: constr + " doesn't exist"
        }
    }

    if(typeof CarMaker[constr].prototype.drive !== "function") {
        CarMaker[constr].prototype = new CarMaker();
    }

    newcar = new CarMaker[constr]();
    return newcar;
};

CarMaker.Compact = function(){
    this.doors = 4;
};

CarMaker.Convertible = function(){
    this.doors = 2;
};

CarMaker.SUV = function(){
    this.doors = 24;
};

var corolla = CarMaker.factory('Compact');
var soltice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory("SUV");

corolla.drive();
soltice.drive();
cherokee.drive();


