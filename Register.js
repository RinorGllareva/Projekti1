function validateForm() {
	let missing = []; //array to hold the missing fields
	let username = document.forms['loginForm']['username']; //Variable to get name
	let email = document.forms['loginForm']['email']; //Varible to get surname
	let password = document.forms['loginForm']['password']; //Varible to get pick up location

	//check if the fields are empty (all of them), and if that is the case make the border color red
	if (username.value == null || username.value == '') {
		missing.push('username');
		username.style.borderColor = 'red';
	}
	if (email.value == null || email.value == '') {
		missing.push('email');
		email.style.borderColor = 'red';
	}
	if (password.value == null || password.value == '') {
		missing.push('password');
		password.style.borderColor = 'red';
	}
	//if missing is empty (==0) show an alert that the form is completed and the login in is finished, else show the missing fields of the input
	if (missing.length == 0) {
		alert('Loged in successfully');
	}
	else{
		alert('Please fill in the form correctly. The fields missing are: ' + missing);	
	}
}
