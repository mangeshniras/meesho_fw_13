var data = JSON.parse(localStorage.getItem("AllCloth")) || [
    {
        image_url: "https://media.istockphoto.com/photos/stacked-and-ready-to-be-packed-picture-id1286024201?b=1&k=20&m=1286024201&s=170667a&w=0&h=VrN3KFXrlnXDvSME2hFLb7EP9DGoUNXHCU_NNZ68Bwo=",
        product_n:"Sweater",
        price:4000,
        discount:"₹100 discount on 1st orde",
    },
    {
        image_url:"https://media.istockphoto.com/photos/mens-white-blank-tshirt-templatefrom-two-sides-natural-shape-on-for-picture-id1151955708?b=1&k=20&m=1151955708&s=170667a&w=0&h=g35sZS5Nw1P0HD8gqGrcl1t-oY-1bgmpxQcWn0RqBW4=",
        product_n:"T-shirts",
        price:1200,
        discount:"₹100 discount on 1st order",
    },
    {
        image_url:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        product_n:"T-shirts",
        price:5000,
        discount:" ₹100 discount on 1st order",
    },
];
function SearchByPrice() {
    var selected = document.getElementById("Sort_by_price").value;
    console.log("selected: ", selected);
    if(selected == "high") {
        data = data.sort(function (a, b){
            return b.price - a.price;
        });
    }
    else if(selected == "low") {
        data = data.sort(function (a, b){
            return a.price - b.price;
        });
    }
    
    console.log(data);
    displayItem(data);
}

var body = document.querySelector("body");
var startdiv = document.createElement("div");
startdiv.setAttribute("id", "startdiv");
body.append(startdiv);
var h2 = document.createElement("h2");
h2.textContent="Cloths";
startdiv.append(h2);
var para = document.createElement("p");
para.textContent="Showing 1-16 out of 100";
startdiv.append(para);
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "container");
body.append(mainDiv);

displayItem(data);
function displayItem(data){
    document.querySelector("#container").innerHTML="";
    data.map(function(item){
    var box = document.createElement("div");
    box.setAttribute("class", "box");

    box.addEventListener("click",function(){
        // addToCart1(item)
        localStorage.setItem("cartItem",JSON.stringify(item))
        window.location.href="meesho_productDetail.html"
        //console.log(item)
    })

    mainDiv.append(box);
    var image = document.createElement("img");
    image.setAttribute("src", item.image_url);
    box.append(image);
    var innerbox = document.createElement("div");
   innerbox.setAttribute("class", "innerbox");
    box.append(innerbox);
    var product_name = document.createElement("p");
    product_name.setAttribute("id", "product_name");
    product_name.textContent=item.product_n;
    innerbox.append(product_name);
    var product_price = document.createElement("h3");
    product_price.setAttribute("id", "product_price");
    var Discount = Math.floor((item.price * 20) / (100));
    product_price.textContent=(item.price - Discount);

    var span = document.createElement("span");
    span.setAttribute("class", "orignal_price");
    //var s =item.price-100;
    // var afterdis = +(item.price) + 100;
    span.textContent=item.price;
    product_price.append(span)

    var span2 = document.createElement("span");
    span2.setAttribute("id", "percentage_off");
    span2.textContent="22% off";
    product_price.append(span2)



    innerbox.append(product_price);
    var discount = document.createElement("p");
    discount.setAttribute("id", "discount");

    var ita = document.createElement("i");
    ita.setAttribute("class", "fa fa-tags percent");
    discount.append(ita)

    var poff = document.createElement("span");
    poff.textContent=item.discount
    discount.append(poff)

    //discount.textContent=data[i].discount;
    innerbox.append(discount);



    var delivery = document.createElement("p");
    delivery.setAttribute("id", "delivery");
    delivery.textContent="Delivery ₹80";
    innerbox.append(delivery);


        
    })
}

//for(var i=0; i<data.length;i++){
    // var a = document.createElement("a");
    // a.setAttribute("href", "cart1.html");
    // mainDiv.append(a);


    

    // document.querySelectorAll(".box").addEventListener("click",proFun)
//}
// function proFun(){
//     console.log('move to cart')
//     window.location.href="cart1.html"
// }
