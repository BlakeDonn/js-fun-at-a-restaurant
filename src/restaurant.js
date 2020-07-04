
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
      if (item.type == 'breakfast' && item != rest.menus.breakfast[0] ){
        rest.menus.breakfast.push(item)
      }
      if (item.type == 'lunch' && item != rest.menus.lunch[0] ) {
        rest.menus.lunch.push(item)
      }
      if (item.type == 'dinner' && item != rest.menus.dinner[0] ) {
        rest.menus.dinner.push(item)
      }
      return
}
  function removeMenuItem(rest, item, name){
        if (rest.menus.breakfast[0].name == item){
          rest.menus.breakfast.pop();
          return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
        }
        if (rest.menus.lunch[0].name == item){
          rest.menus.lunch.pop();
          return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
        }
        if (rest.menus.dinner[0].name == item){
          rest.menus.dinner.pop();
          return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
        }




 





      // if (rest.menus.lunch[0] == item && rest.menus.lunch[2] == name){
      //   rest.menus.lunch.pop();
      // }
      // if (rest.menus.dinner[0] == item && rest.menus.dinner[2] == name){
      //   rest.menus.dinner.pop();
      // }

  }



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}


// for(i = 0; i < rest.menus.length; i++){  // evaluate object.type
// if (rest.menus.includes(item.type))
// return indexOf()
// rest.menus[i].push(item);

// for(i = 0; i < rest.menus.length; i++){
// if(rest.menus[i] == item.type){  // evaluate object.type
