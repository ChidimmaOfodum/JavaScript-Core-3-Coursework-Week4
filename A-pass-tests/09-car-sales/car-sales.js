function sales(carsSold) {
    let totals = {};
    for (let item of carsSold) {
        if(totals[item.make]) totals[item.make]+= item.price;
        else {
            totals[item.make] = item.price
        }
    }
    return totals

}   
module.exports = sales;
