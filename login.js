
var init = function(){
	document.getElementById("btnLogin").onclick = doLogin;
	document.getElementById("txtUser").onkeyup = onkeyup;
	document.getElementById("txtPassword").onkeyup = onkeyup;
};

var onkeyup = function(e){ if(e.keyCode === 13){ doLogin(); } };

var tryingToLogin = false;
var doLogin = function(){
	if( !tryingToLogin ){
		tryingToLogin = true
		document.getElementById("btnLogin").disabled = true;
		console.log(document.getElementById("txtUser").value);
		console.log(document.getElementById("txtPassword").value);
		// Encode user, pass and send to server.
		// Wait for security token and redirect to
		// window.location = "index.html" + securityToken;
		window.location = "index.html";
	}
};
