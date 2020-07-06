
function createRestaurant(name, menu){
    return {
      name: name,
      menus:{
        breakfast:[],
        lunch:[],
        dinner:[]
      }
    }
  }

  function addMenuItem(rest, item){
    if (!rest.menus[item.type].includes(item)){
      rest.menus[item.type].push(item)
    }

 }
  function removeMenuItem(rest, item, name){
      if (name){
        for (i = 0; i < rest.menus[name].length; i++){
          if (rest.menus[name][i].name == item){
            rest.menus[name].splice(item,1);
          }
        }
        return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
      }
      else {
        return `Sorry, we don't sell ${item}, try adding a new recipe!`;
      }
      }




module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
