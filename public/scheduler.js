document.getElementById("contactForm").onsubmit = () => {

    clearErrors();

    let isValid = true;
    
    let firstName = document.getElementById("fname").value.trim();
    if (firstName === "") {
        document.getElementById("fnameError").textContent = "First name is required.";
        isValid = false;
    }

    let lastName = document.getElementById("lname").value.trim();
    if (lastName === "") {
        document.getElementById("lnameError").textContent = "Last name is required.";
        isValid = false;
    }
}
