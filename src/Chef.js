class Chef {
  constructor(name, restaurant){
    this.name = name;
    this.restaurant = restaurant;

    }
    greetCustomer(name, time){
      if (time === true){
        return `Good morning, ${name}!`
      }else
        return `Hello, ${name}!`
    }
    checkForFood(foodItem){
      if (foodItem.name == foodItem){
        return `Yes, we're serving ${fooditem.name} today!`
      }
    }

};

module.exports = Chef;
