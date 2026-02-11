document.getElementById("appointment-form").onsubmit = () => {

    clearErrors();

    let isValid = true;

    let firstName = document.getElementById("fname").value.trim();
    if (firstName === "") {
        document.getElementById("err-fname").textContent = "First name is required.";
        isValid = false;
    }

    let lastName = document.getElementById("lname").value.trim();
    if (lastName === "") {
        document.getElementById("err-lname").textContent = "Last name is required.";
        isValid = false;
    }

    return isValid; 
};
function clearErrors() {
  document.getElementById("err-fname").textContent = "";
  document.getElementById("err-lname").textContent = "";
}