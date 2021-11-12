var date =new Date()
console.log(date)
var mydate=date.toLocaleDateString()
mydate=mydate.split("/").map(Number)
console.log(typeof(mydate[0]))
day =mydate[0]+5;

document.querySelector("button").addEventListener("click",function (){
    alert(`Your order will be delivered by ${day+"/"+mydate[1]+"/"+mydate[2]}`)
})