# Registration Form Validation

A simple **Student Registration Form** built using **HTML, CSS, and JavaScript** with real-time form validation.

This project demonstrates how to validate user input fields and control form submission using JavaScript.

---

## Features

* Real-time validation using JavaScript
* Name field validation (cannot be empty)
* Email format validation
* Password length validation (minimum 6 characters)
* Dynamic error messages
* Input field border color changes (red/green)
* Submit button disabled until all inputs are valid

---

## Technologies Used

* **HTML5** – Structure of the form
* **CSS3** – Styling and visual feedback
* **JavaScript (Vanilla JS)** – DOM manipulation and validation logic

---

## Project Structure

```
Registration-form-validation/
│
├── index.html
├── script.js
├── style.css
└── README.md
```

---

## How the Validation Works

The form uses **JavaScript event listeners** to detect user input.

Each field has its own validation function:

* `validateName()`
* `validateEmail()`
* `validatePassword()`

When the user types in an input field, the corresponding validation function runs and displays an error message if the input is invalid.

Example validation logic:

* Name must not be empty
* Email must contain `@` and `.`
* Password must contain **at least 6 characters**

After each validation, the `checkForm()` function verifies whether all fields are valid and enables the **Submit button**.

---

## Example JavaScript Logic

```javascript
function checkform(){
    if(
        nameinput.value !== "" &&
        emailinput.value.includes("@") &&
        emailinput.value.includes(".") &&
        passwordinput.value.length >= 6
    ){
        submitbtn.disabled = false
    }
    else{
        submitbtn.disabled = true
    }
}
```

---

## How to Run the Project

1. Clone the repository

```
git clone https://github.com/your-username/Registration-form-validation.git
```

2. Open the project folder

3. Run `index.html` in any browser

---

## Learning Goals

This project helped practice:

* DOM selection (`getElementById`)
* Event listeners
* Form validation
* Conditional statements
* Dynamic styling with JavaScript
* Enabling and disabling buttons

---

## Future Improvements

* Improve email validation using **Regular Expressions**
* Add password strength indicator
* Add responsive design
* Store submitted data in local storage
* Convert validation logic into reusable functions

---

## Author

**Daveena Navarathnam**

---

## License

This project is for **learning purposes**.
