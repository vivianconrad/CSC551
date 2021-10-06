function getFormInfo() {
    //get all form info
    let fullName = document.getElementById("firstname").value + document.getElementById("lastname").value;;
    let menu = document.getElementById("orderSelection").value;
    let numofGreenTea = document.getElementById("numofGreenTea").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("phone").value;
    let url = document.getElementById("url").value;
    //let orderTime = document.getElementById("orderTime").value;


    //get the local time and stor it in the array
    var currentTime = new Date();
    let orderTime = currentTime.toLocaleString();


    // create a JSON object to carry the address info
    let address = { streetName: document.getElementById("streetName").value, apartmentNumber: document.getElementById("addressLn2").value, city: document.getElementById("city").value, state: document.getElementById("state").value, zip: document.getElementById("zip").value };


    //create an array to hold all the form informaiton
    let formInfo = [fullName, menu, numofGreenTea, email, tel, url, orderTime, address.streetName, address.apartmentNumber, address.city, address.state, address.zip];

    //pass the array to processFormInfo() function	
    processFormInfo(formInfo);
}

function processFormInfo(formArray) {


    document.writeln('<p>Thank you! ' + formArray[0] + ' for ordering your ' +
        'food from our resturant, below is your order summary to keep for your records:</p>');

    document.writeln('<p>Order Summary: </br>' + 'You ordered: ' + formArray[1] + ' ' + 'AND ' +
        formArray[2] + ' Green Teas </br>' + 'Email address is: ' + formArray[3] +
        '</br> Telephone Number is: ' + formArray[4] +
        '</br> You heard about us from: ' + formArray[5] + '<br> Your order time is: ' + formArray[6] +
        '</p>');
    document.writeln('<p> Your address is: </br>' + formArray[7] + '</br>' + formArray[8] + '</br>' + formArray[9] + '</br>' +
        formArray[10] + '</br>' + formArray[11] + '</br>' + '</p>');

    GetPrice(formArray);

}

function GetPrice(formArray) {
    let itemPrice = 0;

    if (formArray[1] == "Burger Sandwich") {
        itemPrice = 7;
    } else if (formArray[1] == "Cheese Pizza") {
        itemPrice = 5;
    } else if (formArray[1] == "Caesar Salad") {
        itemPrice = 6;
    } else {
        itemPrice = 0;
        document.writeln('<p>Please select an order from the menu</p>');
    }

    let drinkPrice = formArray[2] * 4;

    let totalPrice = drinkPrice + itemPrice;

    document.writeln('<p> Your order total price is $' + totalPrice + '<p>');


}



function autofilling(f) {
    if ($("#checkbox1").prop("checked")) {
        f.newfirstname.value = f.firstname.value;
        f.newlastname.value = f.lastname.value;
        f.newaddress.value = f.address.value;
    } else {
        f.newfirstname = '';
        f.newlastname = '';
        f.newaddress = '';
    }
}

$("#checkbox1").click(function() {
    if ($("#checkbox1").prop("checked")) {
        autofilling();
    }
});