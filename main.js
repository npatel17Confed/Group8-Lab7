var btn = document.getElementById("button");
var nav_bar = document.getElementById("nav-bar");

//Email validation function
function onFormSubmit(e) {
	e.preventDefault();
	var error = document.getElementById("error");
    
	var email = document.getElementById("email").innerHTML;
	if(/\S+@\S+\.\S+/.test(email)) {
		document.getElementById("error").innerHTML = "<p id='green'>You were successfully added to the newsletter group.</p>";
	} else {
		document.getElementById("error").innerHTML = "<p id='red'>The email id you entered is invalid. Please try again.</p>";
	}
	document.getElementById("form").reset();
}

//Nav-bar button function
btn.addEventListener("click", function(e) {
    /* function called when you click of the button */
    /* this if else to change the text in the button */
    if(escape(btn.innerHTML) == "%u2630"){
     	btn.innerHTML="&times;";
     	nav_bar.style.visibility = "visible";
     	nav_bar.style.height = "100vh";
    } else {
        btn.innerHTML="&#x2630;";
        nav_bar.style.visibility = "hidden";
     	nav_bar.style.height = "0";
    }    
});