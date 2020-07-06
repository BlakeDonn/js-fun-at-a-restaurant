
function takeOrder(order1, deliveryOrders){
  if (deliveryOrders.length < 3){
    deliveryOrders.push(order1);
}
};
function refundOrder(remove, deliveryOrders){
      deliveryOrders.shift(remove)
    };

function listItems(deliveryOrders){
    var items = `${deliveryOrders[0].item}, ${deliveryOrders[1].item}, ${deliveryOrders[2].item}`                                            // pull items from order objects
    return items
    }                                               // add items to a string
function searchOrder(deliveryOrders, order){
    if (deliveryOrders[0].item == order){
      var inList = true;
    }else{
      inList = false;
    }
    return inList;
}







module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
