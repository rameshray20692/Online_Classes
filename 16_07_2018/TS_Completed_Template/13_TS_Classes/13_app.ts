interface Vehicle{
    specification():void;
}

class Car implements Vehicle{

    private model:string;
    private year:number;
    private mileage:string;
    private rpm:string;

    constructor(model,year,mileage,rpm){
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.rpm = rpm;
    }

    public getModel(){
        return this.model;
    }
    public getYear(){
        return this.year;
    }
    public getMileage(){
        return this.mileage;
    }
    public getRpm(){
        return this.rpm;
    }

    public specification(){
        console.log(`Model : ${this.getModel()}
                     Year : ${this.getYear()}
                     Mileage : ${this.getMileage()}
                     RPM : ${this.getRpm()}`);
    }
}

let car = new Car('Benz',2018,'10kmpl','5000rpm');
car.specification();