// MAIN CODE ENTRY :
var main = function(){
	test();
};

var test = function(){
	GET("/tools.js");  // TEST GET METHOD
	setTimeout(function(){
		console.log(GET_CACHE["/tools.js"]); // CHECK IF CACHED
	}, 3000);
};
