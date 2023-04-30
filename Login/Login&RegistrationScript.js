// JavaScript source code
let loginForm = document.getElementById("login");
let registerForm = document.getElementById("register");
let botton = document.getElementById("btn");


var Get_User
var Get_Json_User = []

let All_Users = []
let User = { name: String, email: String, password: String, phone: String, address: String, myproducts: Object};

var All_User_Email = [];
var User_Email = { email: String, Login_State: Boolean };

var Get_User_Email;
var Get_User_Email_Json = [];



function showregister() {
    loginForm.style.left = "400px";
    registerForm.style.left = "50px";
    botton.style.left = "0px";
}

function showlogin() {
    loginForm.style.left = "50px";
    registerForm.style.left = "-400px";
    botton.style.left = "110px";
}
function register(Email, Password, Username,Phone,Address) {
    debugger
    var registerform = document.getElementById("register")
    if (Username.value == "" || Email.value == "" || Password.value == "" || Phone.value == "" || Address.value == "") {
        alert("Enter Your Data")
    }
    else
    {
        Get_User = localStorage.getItem("All_Users")
        Get_Json_User = JSON.parse(Get_User);
        if (Get_Json_User != null) {
            for (let i = 0; i < Get_Json_User.length; i++) {
                var Get_Email = Get_Json_User[i].email
                if (Get_Email == Email.value) {
                    alert("sorry! This Email is already Token")
                    return false;
                }
            }
            var Check_Email_Password = Email_Password_Validation(Email.value, Password.value);
            var Check_Username_Phone_Address = Username_Phone_Address_Validation(Username.value, Phone.value, Address.value);
            if (Check_Email_Password == true && Check_Username_Phone_Address == true) {
                registerform.setAttribute("action", "#")
                debugger
                User.name = Username.value;
                User.email = Email.value
                User.password = Password.value;
                User.phone = Phone.value;
                User.address = Address.value;
                User.myproducts = []
                All_Users = Get_Json_User
                All_Users.push(User)
                localStorage.setItem("All_Users", JSON.stringify(All_Users));
            }
        }
        else {
            var Check_Email_Password = Email_Password_Validation(Email.value, Password.value);
            var Check_Username_Phone_Address = Username_Phone_Address_Validation(Username.value, Phone.value, Address.value);
            if (Check_Email_Password == true && Check_Username_Phone_Address == true) {
                registerform.setAttribute("action", "#")

                User.name = Username.value;
                User.email = Email.value
                User.password = Password.value;
                User.phone = Phone.value;
                User.address = Address.value;
                User.myproducts = []

                All_Users.push(User)
                localStorage.setItem("All_Users", JSON.stringify(All_Users));
            }
        }
    }
}

function login(Email, Password) {
    debugger
    if (Email.value == "" || Password.value == "")
        alert("Enter Your Email & Password")
    else {
        Get_User = localStorage.getItem("All_Users")
        Get_Json_User = JSON.parse(Get_User);
        var i;
        for (i = 0; i < Get_Json_User.length; i++) {
            var Get_Email = Get_Json_User[i].email
            var Get_Password = Get_Json_User[i].password
            if (Email.value == Get_Email) {
                if (Password.value == Get_Password) {
                    //Get_Json_User[i].Login_State = true
                    //All_Users = Get_Json_User
                    //localStorage.setItem("All_Users", JSON.stringify(All_Users));

                    User_Email.email = Get_Json_User[i].email
                    User_Email.Login_State = true
                    All_User_Email.push(User_Email)
                    localStorage.setItem("All_Use_Email", JSON.stringify(All_User_Email));

                    var Get_loginform = document.getElementById("login")
                    Get_loginform.setAttribute("action", "../main/home.html")
                    break;
                }
            }
            if (i == Get_Json_User.length - 1 && (Email.value != Get_Email || Password.value != Get_Password))
                alert("Sorry! Wrong Cratiria Try Again")
        }
    }
}

function Logout() {
    debugger;
    var Logout_form = document.getElementById("Logout")
    Logout_form.setAttribute("action", "Login&Registration.html")
    localStorage.removeItem("All_Use_Email")
}
function Email_Password_Validation(Email, Password) {
    debugger
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (Email.match(mailformat)) {
        if (Password.match(passwordformat)) {
            //alert("Valid email address and Password! Now, You can Login");
            return true;
        }
        else {
            alert("Password must between 8 and 15 words, contains at least one (Uppercase,lowercase,non-alphanumeric,digit) and no white spaces ")
            return false
        }
    }
    else {
        alert("You have entered an invalid email address!");
        return false;
    }
}
function Username_Phone_Address_Validation(username, phone, address) {
    var usernameformat = /^[a-zA-z]{3,}[a-zA-Z0-9]*$/;
    var phoneformat = /^01[0-2,5]{1}[0-9]{8}$/;
    var addressformat = /^[a-zA-Z]{5,}[a-zA-Z0-9]*$/;
    if (username.match(usernameformat)) {
        if (phone.match(phoneformat)) {
            if (address.match(addressformat)) {
                alert("Registerd Successfully. You can Login now")
                return true
            }
            else {
                alert("Address must have at least 5 Characters")
                return false
            }
        }
        else {
            alert("Enter Your Correct Phone Number")
        }
    }
    else {
        alert("User Name must have at least 3 Characters")
    }
}