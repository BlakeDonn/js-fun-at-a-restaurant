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
      if (this.restaurant.menus.breakfast[0] == foodItem){
        return `Yes, we're serving ${foodItem.name} today!`
      }
      if( this.restaurant.menus.breakfast[0] != foodItem){
        return `Sorry, we aren't serving ${foodItem.name} today.`;
      }
    }

};

module.exports = Chef;
