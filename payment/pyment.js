
function checkout() {
    // get the form inputs
    const cardNumber = document.querySelector('.card-number-input').value;
    const cardHolder = document.querySelector('.card-holder-input').value;
    const month = document.querySelector('.month-input').value;
    const year = document.querySelector('.year-input').value;
    const cvv = document.querySelector('.cvv-input').value;
  
    // validate the inputs
    if (!/^\d{16}$/.test(cardNumber)) {
      alert('Please enter a valid 16-digit card number.');
      return false;
    }
  
    if (!/^[a-zA-Z ]{4,12}$/.test(cardHolder)) {
      alert('Please enter the name on the card using letters only.');
      return false;
    }
  
    if (month === 'month' || year === 'year') {
      alert('Please select a valid expiration date.');
      return false;
    }
  
    if (!/^\d{3,4}$/.test(cvv)) {
      alert('Please enter a valid CVV code using numbers only.');
      return false;
    }
  
    // if all inputs are valid, submit the form
    alert('Thank you for your payment!');
    debugger
    var x = JSON.parse(localStorage.getItem("All_Use_Email"))
    var y = JSON.parse(localStorage.getItem("All_Users"))
    for (let i = 0; i < y.length; i++) {
        if (x[0].email == y[i].email) {
            y[i].myproducts = []
        }
    }
    localStorage.removeItem("cartitem")
    localStorage.removeItem("cartitems")

    localStorage.setItem("All_Users", JSON.stringify(y))
    alert('Checkout complete!');
    return true;
  }
  





