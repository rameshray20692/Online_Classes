var Car = (function () {
    function Car(model, year, mileage, rpm) {
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.rpm = rpm;
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    Car.prototype.getMileage = function () {
        return this.mileage;
    };
    Car.prototype.getRpm = function () {
        return this.rpm;
    };
    Car.prototype.specification = function () {
        console.log("Model : " + this.getModel() + "\n                     Year : " + this.getYear() + "\n                     Mileage : " + this.getMileage() + "\n                     RPM : " + this.getRpm());
    };
    return Car;
}());
var car = new Car('Benz', 2018, '10kmpl', '5000rpm');
car.specification();
