function nameMenuItem(name) {
  return `Delicious ${name}`
}
function createMenuItem(menuItemName, price, type){
  return {
    name: menuItemName,
    price: price,
    type:type
  }
}
function addIngredients(ingredient, ingredients){
  if (!ingredients.includes(ingredient)){
    ingredients.push(ingredient);
  }
}
function formatPrice(initialPrice){
  return formattedPrice = `$${initialPrice}`;
}
function decreasePrice(price){
  return (90/100)*price;
}
function createRecipe(title, ingredients, menuItemType){
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
