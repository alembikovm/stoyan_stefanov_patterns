function Sale(price){
    this.price = price || 100;
};

Sale.prototype.getPrice = function(){
    return this.price;
}

Sale.decorators = {};

Sale.decorators.fedtax = {
    getPrice: function(){
        var price = this.uber.getPrice();
        price += price * 13 / 100;
        return price;
  },
  fed: "Tax prototype"
}

Sale.decorators.rub = {
    getPrice: function(){
        var price = this.uber.getPrice();
        price += price * 59,19;
        return price;
  },
  rub: "Rub prototype"
}

Sale.decorators.money = {
    getPrice: function(){
        return "Rub " + this.uber.getPrice().toFixed(2);
  },
  money: "Money protytpe"
}

Sale.prototype.decorate = function(decorator){
    var F = function(){},
    overrides = this.constructor.decorators[decorator],
    i, newobj;

    F.prototype = this;
    newobj = new F();
    newobj.uber = F.prototype;
    for(i in overrides){

        if(overrides.hasOwnProperty(i)){
            newobj[i] = overrides[i];
        }
    }

    return newobj;
}

var sale = new Sale(100);

sale = sale.decorate('fedtax');
sale = sale.decorate('rub');
sale = sale.decorate('money')
console.log(sale.getPrice());