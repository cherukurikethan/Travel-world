// ===============================
// Dream Destination JavaScript
// ===============================

// Contact Form Validation

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const phone=document.getElementById("phone").value.trim();

const destination=document.getElementById("destination").value.trim();

if(name===""||email===""||phone===""||destination===""){

alert("Please fill all the required fields.");

return;

}

alert("Thank You! Your enquiry has been submitted successfully.");

form.reset();

});

}