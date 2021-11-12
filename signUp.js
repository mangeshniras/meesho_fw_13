userData = JSON.parse(localStorage.getItem("userData")) || [];
// document.querySelector("#signUp_button").addEventListener("click",myFun);
// console.log(userData)
function myFun() {
  //   event.preventDefalut();
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("phone").value;
  var password = document.getElementById("password").value;

  userObject = {
    userEmail: email,
    userMobile: mobile,
    userPassword: password,
  };
  userData.push(userObject);
  localStorage.setItem("userData", JSON.stringify(userData));
  //console.log(email,mobile,password,userData);
 

  alert("Sign Up Succesfully Do you Want to login");
//   window.location.href = "homehtml.html";
}
