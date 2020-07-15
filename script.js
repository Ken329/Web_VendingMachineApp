var btn = document.getElementById("mybtn");
function signup(){
	btn.style.left = '111px';
}
function login(){
	btn.style.left = '0';
}
function login_check(){
	var attempts = 3;
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;

	if(user == "ken" && pass == "liau"){
		document.getElementById("page").style.display = 'none';
		document.getElementById("page-container").style.display = 'block';
		document.getElementById("loginLogo").innerHTML = user;
		alert("login success");
	}else{
		attempts--;
		alert(attempts + " attempts left");
		if(attempts == 0){
			document.getElementById("user").disabled = true;
			document.getElementById("pass").disabled = true;
		}
	}
}
function signup_check(){
	var user = document.getElementById("sg_user").value;
	var pass = document.getElementById("sg_pass").value;
	var cfpass = document.getElementById("cf_pass").value;

	if(pass == cfpass){
		document.getElementById("page").style.display = 'none';
		document.getElementById("page-container").style.display = 'block';
		document.getElementById("loginLogo").innerHTML = user;
		alert("Account has been created sucessfully");
	}else{
		alert("Your password is not the same");
	}
	
}
function drink(code){
	var name;
	var price;

	if (code == "f1") {
		name = "Coca Cola"
		price = "$1.50"
	}else if(code == "f2"){
		name = "Sprite"
		price = "$1.50"
	}
	else if(code == "f3"){
		name = "Coffee"
		price = "$2.50"
	}
	else if(code == "f4"){
		name = "Mountain Dew"
		price = "$1.50"
	}
	else if(code == "f5"){
		name = "Fanta"
		price = "$2.50"
	}
	else{
		name = "Juice"
		price = "$3.50"
	}

	document.querySelector("#myprice").innerHTML = price;
	document.querySelector("#mydrink").innerHTML = name;
}