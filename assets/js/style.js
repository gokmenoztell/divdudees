document.querySelector(".email-signup").style.display = "none";
document.getElementById("signup-box-link").addEventListener("click", function() {
  document.querySelector(".email-login").style.opacity = "0";
  setTimeout(function() {
    document.querySelector(".email-login").style.display = "none";
    document.querySelector(".email-signup").style.display = "block";
    document.getElementById("login-box-link").classList.remove("active");
    document.getElementById("signup-box-link").classList.add("active");
  }, 100);
});
document.getElementById("login-box-link").addEventListener("click", function() {
  document.querySelector(".email-signup").style.opacity = "0";
  setTimeout(function() {
    document.querySelector(".email-signup").style.display = "none";
    document.querySelector(".email-login").style.display = "block";
    document.getElementById("login-box-link").classList.add("active");
    document.getElementById("signup-box-link").classList.remove("active");
  }, 100);
});