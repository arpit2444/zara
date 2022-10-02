let arr = [
    { image: "https://static.zara.net/photos///2022/I/0/1/p/5216/259/802/2/w/313/5216259802_1_1_1.jpg?ts=1663231524787",
      name : "Long Printed Dress",
      price:   "₹ 4,990",
    },
    { image: "https://static.zara.net/photos///2022/I/0/1/p/5216/263/500/2/w/662/5216263500_2_1_1.jpg?ts=1663166493438",
    name : "Long Printed Dress",
    price:  "₹ 4,990.00",
  },
  { image: "https://static.zara.net/photos///2022/V/0/1/p/3046/029/800/7/w/313/3046029800_1_1_1.jpg?ts=1640251119716",
      name : " FAUX LEATHER JACKET",
      price:   "₹ 3,990.00",
    },
    { image: "https://static.zara.net/photos///2022/I/0/1/p/7885/138/085/2/w/662/7885138085_15_14_1.jpg?ts=1660817999473",
    name : "SATIN OVERSIZE SHIRT ",
    price:  "₹ 2,990.00",
  },
  { image:  "https://static.zara.net/photos///2022/V/0/1/p/9492/650/800/2/w/662/9492650800_1_1_1.jpg?ts=1655905920601",
  name : "SHORT SATIN DRESS",
  price:   "₹ 2,890.00",
},
{ image: "https://static.zara.net/photos///2022/I/0/1/p/4043/287/940/2/w/662/4043287940_1_1_1.jpg?ts=1662459891444" ,
name : "CULOTTE TROUSERS",
price:  "₹ 2,990.00",
},
{ image: "https://static.zara.net/photos///2022/I/0/1/p/2731/254/501/2/w/662/2731254501_2_1_1.jpg?ts=1662458890207" ,
  name : " SATIN SHIRT",
  price:   "₹ 3,990.00",
},
{ image: "https://static.zara.net/photos///2022/I/0/1/p/7901/810/800/2/w/662/7901810800_2_5_1.jpg?ts=1661325030428" ,
name : "Long Printed ",
price:  "49.00",
},
{ image: "https://static.zara.net/photos///2022/I/0/1/p/2449/241/400/2/w/313/2449241400_2_1_1.jpg?ts=1660838935183" ,
name : "Long Printed Dress",
price:   "4,999.00",
},
{ image: "https://static.zara.net/photos///2022/I/1/1/p/3106/810/040/2/w/313/3106810040_15_1_1.jpg?ts=1660288567024" ,
name : "Long Printed Dress",
price:  "499.00",
},
{ image: "https://static.zara.net/photos///2022/I/1/1/p/6442/910/040/2/w/313/6442910040_15_1_1.jpg?ts=1661871121545" ,
name : " Printed Dress",
price:   "999.00",
},
{ image: "https://static.zara.net/photos///2022/I/1/1/p/2233/010/098/2/w/313/2233010098_2_1_1.jpg?ts=1659454537353",
name : "Long Printed ",
price:  "49.00",
}
,
{ image: "https://static.zara.net/photos///2022/I/1/1/p/6842/910/002/2/w/313/6842910002_6_1_1.jpg?ts=1660138315571"  ,
name : "Long Printed Dress",
price:  "499.00",
},
{ image: "https://static.zara.net/photos///2022/I/0/1/p/3519/030/066/2/w/313/3519030066_1_1_1.jpg?ts=1662634715946" ,
name : " Printed Dress",
price:   "999.00",
},
{ image: "https://static.zara.net/photos///2022/I/1/1/p/6002/010/040/2/w/313/6002010040_15_1_1.jpg?ts=1658942369541",
name : "Long Printed ",
price:  "49.00",
},
{ image: "https://static.zara.net/photos///2022/I/0/1/p/8839/501/050/2/w/313/8839501050_2_1_1.jpg?ts=1663327760064" ,
name : "Long Printed Dress",
price:  "499.00",
},
{ image: "https://static.zara.net/photos///2022/I/0/1/p/7102/323/800/2/w/313/7102323800_2_1_1.jpg?ts=1663342804183"  ,
name : " Printed Dress",
price:   "999.00",
},
{ image: "https://static.zara.net/photos///2022/I/0/1/p/3579/733/800/2/w/313/3579733800_2_1_1.jpg?ts=1660809755638",
name : "Long Printed ",
price:  "49.00",
}

   
]
// let container = document.querySelector("#imagebox");
// let dive = document.createElement("button");
// dive.innerText="clickme"
// dive.addEventListener("click",function(el){
//     console.log("hello")
// })
// container.append(dive)

// arr.forEach(function(el){
// let div = document.createElement("div");
// let div2 = document.createElement("div");
// let product_name = document.createElement("p");
// let price_p = document.createElement("p");
// let images = document.createElement("img");
// let  btn = document.createElement("button");
// btn.innerText="+";
// btn.addEventListener("click",function(el){
//     console.log("hello")
// })
// div.append(btn);
// container.append(div);

// })
let container = document.querySelector("#imagebox");

arr.forEach(function(el){
let div = document.createElement("div");
let div2 = document.createElement("div");
let product_name = document.createElement("p");
let price_p = document.createElement("p");
let images = document.createElement("img");
let  btn = document.createElement("button");
btn.innerText="+";
console.log("heello")
btn.addEventListener("click",function(){
    console.log("hi")
    add(el);
})

images.src = el.image;
price_p.innerText=el.price;
product_name.innerText=el.name;

div2.append(product_name,price_p);
div.append(images,btn,div2);
container.append(div);


})



function add(el){
  let newArr = JSON.parse(localStorage.getItem("adding")) || [];
  newArr.push(el);
  localStorage.setItem("adding",JSON.stringify(newArr))
}