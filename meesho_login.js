userData = JSON.parse(localStorage.getItem("userData")) || [];
document.querySelector("#login_button").addEventListener("click", myFun);
// console.log(userData)
function myFun(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user_type = document.getElementById("user_type").value;
  console.log(user_type);
  var flag = false;
  //console.log(email,password,userData);
  for (i = 0; i < userData.length; i++) {
    //console.log(userData[i].userEmail,userData[i].userPassword)
    console.log(typeof (userData[i].userEmail, email));
    if (
      email === userData[i].userEmail &&
      password === userData[i].userPassword &&
      user_type === "supplier"
    ) {
      alert("Welcome supplier");
      window.location.href = "meesho_merchant.html";
      //window.location.href = "meesho_merchant.html";
      //console.log(userData.length)
      flag = true;
      break;
    } else if (
      email === userData[i].userEmail &&
      password === userData[i].userPassword &&
      user_type === "user"
    ) {
      alert("Welcome User");
      window.location.href = "addtocart.html";
      //window.location.href = "meesho_merchant.html";
      //console.log(userData.length)
      flag = true;
      break;
    }
  }
  if (!flag) {
    alert("Incorrect credentials");
  }
  //alert("Login Succesful")
  //window.location.href = "product.html";
}
