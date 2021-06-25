

var products=[
 // slno,  name,    price, quantity available]
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [107,"item1",5,10],
    
]
var count=0;

// // // print number of product in this -shop  8
// for(let product in products){   
//     count++;
// }
// console.log(count);

// print number of product in -stock 7
// for(let product of products){
//     if(product[3]<1){
//         console.log(product);
//     }
// }

// print costly product - boost

  var maxprice=0; 
  for(let product of products){
      if(product[2]>maxprice){ 
          maxprice=product[2];
        //   if(maxprice>=product[2]){
        //     console.log(product);
        //   }  
      }
      
  }
     console.log(" Highest price="+ maxprice);

// print losw_cost product   -item1

var minprice=30; 
  for(let product of products){
      if(product[2]<minprice){ 
          minprice=product[2];
        //   if(maxprice>=product[2]){
        //     console.log(product);
        //   }  
      }
      
  }
     console.log("Lowest price= " +minprice);

// is there any item available under rs 10 ? true
  
for(let product of products){
    if(product[2]<10){
        console.log(product);
    }
}
// print deatils of boost 
for(let product of products){
    if(product[1]=="boost"){
        console.log(product);
    }
}