
var products=[
     {code:1000, name: "garlic", mrp:120, aval_qty: 10},
     {code:1001, name: "chilly",mrp:80, aval_qty:5}, 
     {code:1002, name: "tomatto",mrp:35, aval_qty:20}, 
     {code:1003, name: "onion", mrp:40, aval_qty:37}, 
     {code:1004, name: "potatto", mrp:45, aval_qty:40}, 
     {code:1005, name: "banana", mrp:55, aval_qty:60}, 
     {code:1906, name: "brinjal", mrp:43, aval_qty:2}, 
     {code:1007, name: "beetroot", mrp:38, aval_qty:5}, 
     {code:1008, name: "carrot", mrp:60, aval_qty:0}, 
     {code:1009, name: "bittergod",mrp:50, aval_qty:5},
]

// array of objects
// print product names only

var product_name= products.map(item=>item.name)
console.log(product_name);

// print all product names in upper case
var p_name=products.map(item=>item.name.toUpperCase())
console.log(p_name);

// print all products whose mrp<50

var productnames=products.filter(item=>item.mrp<50)
console.log(productnames);

// print out of stock items

var out_stock=products.filter(item=>item.aval_qty==0)
console.log(out_stock);

// stock less than 10

var productstock=products.filter(item=>item.aval_qty<10)
console.log(productstock);

// products 

//
var offer=products.filter(item=>item.mrp>50?item.offer="5%":item.offer="0%")
console.log(offer);

// to print costly product

var costly_product=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2)
console.log(costly_product);

// to print low cost product

var lowcost_product=products.reduce((item1,item2)=>item1.mrp<item2.mrp?item1:item2)
console.log(lowcost_product);


// 
var product_details=products.find(item=>item.name=="carrot")
console.log(product_details);

// 

var is_available=products.some(item=>item.mrp>30 & item.mrp<50?item1:item2);
console.log(is_available);