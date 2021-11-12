var allproduct = JSON.parse(localStorage.getItem("allproduct")) || [];
var allShoes = JSON.parse(localStorage.getItem("AllShoes")) || [];
var cloths = JSON.parse(localStorage.getItem("AllCloth")) || [];
var Jewellery = JSON.parse(localStorage.getItem("Jewellery")) || [];
var form = document.querySelector("form");
// var pro_type = document.querySelector("#pro_type").value;
document.querySelector("#submit_btn").addEventListener("click",myFun)
function myFun(e){
    e.preventDefault();
    
    var proType = form.pro_type.value;

    console.log(proType);
    var obj = {
        image_url:form.img_url.value,
        product_n:form.name.value,
        price:form.prod_price.value,
        discount:"₹100 discount on 1st orde",
    }
    //ProdutcData.push(obj);
    if(proType == "shoes"){
        allShoes.push(obj);
        localStorage.setItem("AllShoes",JSON.stringify(allShoes));
        localStorage.setItem("allproduct",JSON.stringify(allShoes));
        alert("Product added successfully")
    }
    else if(proType == "cloths"){
        cloths.push(obj);
        localStorage.setItem("AllCloth",JSON.stringify(cloths));
        localStorage.setItem("allproduct",JSON.stringify(cloths));
        alert("Product added successfully")
    }
    else if(proType == "ring"){
        Jewellery.push(obj);
        localStorage.setItem("Jewellery",JSON.stringify(Jewellery));
        localStorage.setItem("allproduct",JSON.stringify(Jewellery));
        alert("Product added successfully")
    }

    
}