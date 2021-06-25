
var product={
    item_code:1000,
    mrp:30000,
    name="f14",
    in_stock:15
}

//item price
console.log(product.mrp);

// item name 
console.log(product.name);

// update offer 2000

product.mrp-=2000;

if(!("offer" in product)){
    product.offer="25%";
}
