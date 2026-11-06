const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }

        alert("Login form submitted successfully");
        loginForm.reset();
    })
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmpassword = document.getElementById("confirmpassword").value.trim(); 

        if (name === "" || email === "" || password === "" || confirmpassword === "") {
            alert("Please fill in all fields!");
            return;
        }

        if(password.length < 8) {
            alert("Password must contain at least 8 characters!");
            return;
        }

        if(password !== confirmpassword) {
            alert("Passwords don not match!");
            return;
        }

        alert("Account created successfully! Welcome to Nexora.");
        signupForm.reset();
    });
}