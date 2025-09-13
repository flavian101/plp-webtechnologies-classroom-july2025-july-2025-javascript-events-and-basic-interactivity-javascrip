document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("intro").textContent = "You clicked the button! This is still about me.";
});

document.getElementById("toggleModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
    count++;
    document.getElementById("counterValue").textContent = count;
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = "";

    if (name === "") {
        message = "Name is required.";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        message = "Please enter a valid email.";
    } else if (password.length < 6) {
        message = "Password must be at least 6 characters.";
    } else {
        message = "Form submitted successfully!";
    }

    document.getElementById("formMessage").textContent = message;
});
