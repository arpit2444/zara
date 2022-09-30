let contain = document.getElementById("contain"); 

let innerdiv =  document.createElement("div");
let plus = document.createElement("button");
let image = document.createElement("img").src;
let name = document.createElement("p").value;
let price = document.createElement("p").value;
let arr = [];
content();

// function content (){
  
//  arr = [
//     { image: "https://static.zara.net/photos///2022/I/0/1/p/5216/263/500/2/w/384/5216263500_2_1_1.jpg?ts=1663166493438",
//       name : "Long Printed Dress",
//       price:   "4,999.00",
//     },
//     { image: "https://static.zara.net/photos///2022/V/0/1/p/3046/029/800/7/w/313/3046029800_1_1_1.jpg?ts=1640251119716",
//     name : "Long Printed Dress",
//     price:  "4,999.00",
//   }
   
// ]
// console.log(arr)

// }

// arr.forEach(function(el){
//   innerdiv.append(el.image, el.name, el.price)
// })
let I = document.createElement("img");
I.src= "https://static.zara.net/photos///2022/V/0/1/p/3046/029/800/7/w/313/3046029800_1_1_1.jpg?ts=1640251119716";
// innerdiv.append(I);
contain.append(I); 