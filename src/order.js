
function takeOrder(order1, deliveryOrders){
  if (deliveryOrders.length < 3){
    deliveryOrders.push(order1);
}
};
function refundOrder(remove, deliveryOrders){
  for (i = 0; i < deliveryOrders.length; i++){
    if (deliveryOrders[i].orderNumber === remove){
      deliveryOrders.splice( deliveryOrders.indexOf(deliveryOrders[i]), 1);
        }
      }
    };
function listItems(deliveryOrders){
    for(i = 0; i < deliveryOrders.length; i++){
    var deliveryOrders = deliveryOrders.push(deliveryOrders[i].item)
      return deliveryOrders;
    }
    }




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}


///if (deliveryOrders[i].orderNumber === remove){
///deliveryOrders.splice([i, 1]);

///deliveryOrders.filter(deliveryOrders.forEach({orderNumber}[remove]);


// if (deliveryOrders[i].orderNumber === remove){
//   deliveryOrders = deliveryOrders.filter(deliveryOrders[i]);
