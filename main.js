var btn = document.getElementById("button");
var nav_bar = document.getElementById("nav-bar");

function onFormSubmit(e) {
	e.preventDefault();
	var error = document.getElementById("error");
        var re = /\S+@\S+\.\S+/;
	var email = document.getElementById("email").innerHTML;
	if(re.test(email)) {
		document.getElementById("error").innerHTML = "<p id='green'>You were successfully added to the newsletter group.</p>";
	} else {
		document.getElementById("error").innerHTML = "<p id='red'>The email id you entered is invalid. Please try again.</p>";
	}
	document.getElementById("form").reset();
}

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