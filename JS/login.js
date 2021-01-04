const { document } = require("globalthis/implementation");

const passwordToggle = document.getElementById("passwordToggle");
const passwordInput = document.getElementById("passwordInput");
const lemail = document.getElementById("lemail");
const form = document.getElementsById("form");

// passwordToggle.addEventListener("click", function() {    
//     if (passwordToggle.src.includes("show")){
//         passwordToggle.src = "../images/hide.svg";
//         passwordInput.type = "text";
//     } else {
//         passwordToggle.src = "../images/show.svg";
//         passwordInput.type = "password";
//     }
// });

form.addEventListener('login' , (e) => {
    e.preventDefault();
})

