
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
console.log(product);

// Check if offer is present, if not add offer 25%

if(!("offer" in product)){
    product.offer="25%";
}
console.log(product);

//To update instock as 25
product.in_stock=25;
console.log(product);
