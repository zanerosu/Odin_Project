function orderTotal(order){
    return order.items.reduce((prev, curr) => curr.price * (curr.quantity || 1) + prev, 0);
}

module.exports = orderTotal;