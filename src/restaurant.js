
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

//     rest.menus[name].splice(item,1);
//     return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
//   }
//     else {
//       return `Sorry, we don't sell ${item}, try adding a new recipe!`;
//     }
// }






// console.log(rest.menus.breakfast);
// if (item.type == 'breakfast' && item != rest.menus.breakfast[0] ){
//     rest.menus.breakfast.push(item)
//   }
//   if (item.type == 'lunch' && item != rest.menus.lunch[0] ) {
//     rest.menus.lunch.push(item)
//   }
//   if (item.type == 'dinner' && item != rest.menus.dinner[0] ) {
//     rest.menus.dinner.push(item)
//   }
//   return


 //   if (typeof rest.menus.breakfast[0] != undefined && rest.menus.breakfast[0].name == item){
 //     rest.menus.breakfast.pop();
 //     return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
 //    }
 //   if (typeof rest.menus.lunch[0] != undefined && rest.menus.lunch[0].name == item){
 //     rest.menus.lunch.pop();
 //     return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
 //    }
 //   if (typeof rest.menus.dinner[0] != undefined && rest.menus.dinner[0].name == item){
 //     rest.menus.dinner.pop();
 //     return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
 //    }
 //   else {
 //     return  `Sorry, we don't sell ${item}, try adding a new recipe!`;
 // }





      // if (Object.values(rest.menus.breakfast).indexOf(item) > -1){
      // return `Sorry, we don't sell ${item}, try adding a new recipe!`;
      // }
      // if (Object.values(rest.menus.breakfast).indexOf(item){
      // rest.menus.breakfast.pop();
      // }
      // return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
      // // }
      // if (rest.menus.lunch[0].name == item){
      // rest.menus.lunch.pop();
      // return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
      // }
      // if (rest.menus.dinner[0].name == item){
      // rest.menus.dinner.pop();
      // return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
      // }



    // if (rest.menus.breakfast == []){
    // return `Sorry, we don't sell ${item}, try adding a new recipe!`;
    // }
    // if (rest.menus.lunch == []){
    // return `Sorry, we don't sell ${item}, try adding a new recipe!`;
    // }
    // if (rest.menus.dinner == []){
    // return `Sorry, we don't sell ${item}, try adding a new recipe!`;
    // }








//       if (Object.values(rest.menus.lunch[0]) == item){
//         rest.menus.lunch.pop();
//         return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
//       } else{
//         return `Sorry, we don't sell ${item}, try adding a new recipe!`;
//       }
//       if (Object.values(rest.menus.dinner[0]) == item){
//         rest.menus.dinner.pop();
//         return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
//       } else{
//         return `Sorry, we don't sell ${item}, try adding a new recipe!`;
// }



      // }
      // if (rest.menus.lunch[0].name == item){
      //   rest.menus.lunch.pop();
      //   return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
      // }
      // if (rest.menus.dinner[0].name == item){
      //   rest.menus.dinner.pop();
      //   return `No one is eating our ${item} - it has been removed from the ${name} menu!`;
      // }





 





    // if (rest.menus.lunch[0] == item && rest.menus.lunch[2] == name){
    //   rest.menus.lunch.pop();
    // }
    // if (rest.menus.dinner[0] == item && rest.menus.dinner[2] == name){
    //   rest.menus.dinner.pop();
    // }






// for(i = 0; i < rest.menus.length; i++){  // evaluate object.type
// if (rest.menus.includes(item.type))
// return indexOf()
// rest.menus[i].push(item);

// for(i = 0; i < rest.menus.length; i++){
// if(rest.menus[i] == item.type){  // evaluate object.type
