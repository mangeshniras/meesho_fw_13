data = JSON.parse(localStorage.getItem("cartItem"));
var left_price = document.querySelector("#t_price");
left_price.textContent=data.price;

var total = (80+(+data.price))-100;
var t_price = document.querySelector("#total_price");
t_price.textContent=total;