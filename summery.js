data = JSON.parse(localStorage.getItem("cartItem"));
//console.log(data)
var pro_img1 = document.querySelector("#pro_img");
pro_img1.setAttribute("src",data.image_url)
//console.log(data.price,data.image_url,data.product_n)

var pro_name = document.querySelector("#prod_name");
pro_name.textContent=data.product_n;

var pro_price = document.querySelector("#product_price");
pro_price.textContent=data.price;

var pro_price1 = document.querySelector("#product_price1");
pro_price1.textContent=data.price;

// var left_price = document.querySelector("#t_price");
// left_price.textContent=data.price;

var total = (80+(+data.price))-100;
var t_price = document.querySelector("#total_price1");
t_price.textContent=total;
function con(){
    confirm("Do you want to place your order ?")
}


var date =new Date()
console.log(date)
var mydate=date.toLocaleDateString()
mydate=mydate.split("/").map(Number)
console.log(typeof(mydate[0]))
day =mydate[0]+5;

document.getElementById("delivery_time").textContent=`${day+"/"+mydate[1]+"/"+mydate[2]}`;
//alert("Do you want to place your order")