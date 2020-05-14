//collect customer info
const txtName = document.getElementById("name");
const txtAddress = document.getElementById("address");
const txtAddress2 = document.getElementById("address2")
const txtPostCode = document.getElementById("postCode")

//show & ticket info
const txtShow = document.getElementById("selectShow")
const txtTickets = document.getElementById("tickets")
const txtDelivery = document.getElementById("delivery")

// book button
const btnBook = document.getElementById("book")

//show & delivery prices
const showPricePhantom = 79;
const showPriceHamilton = 85;
const showPriceLion = 67;
const showPriceMiss = 83;
const delEticket = 0;
const delPosted = 3.99;
const delCollection = 1.50;

//event listener
btnBook.addEventListener("click", bookTickets)

//output
const txtOutput = document.getElementById("output");

let showPrice;
let totalCost;
let finalCost;
let discountPrice;

function bookTickets() {
    event.preventDefault();
    switch (txtShow.value) {
        case "Phantom of the Opera":
            showPrice = showPricePhantom * parseInt(txtTickets.value);
            ticketPrice = showPricePhantom;
            break;
        case "Hamilton":
            showPrice = showPriceHamilton * parseInt(txtTickets.value);
            ticketPrice = showPriceHamilton;
        case "Lion King":
            showPrice = showPriceLion * parseInt(txtTickets.value);
            ticketPrice = showPriceLion;
            break;
        case "Miss Saigon":
            showPrice = showPriceMiss * parseInt(txtTickets.value);
            ticketPrice = showPriceMiss;
            break;
    }

    if (parseInt(txtTickets.value) <6 ) {
        discountPrice = showPrice;
        percent = 0;
    } 
    else if (parseInt(txtTickets.value) >= 6 && parseInt(txtTickets.value) < 10) {
       discountPrice = showPrice - ((showPrice / 100) * 10); 
       percent = 10; 
    }
    else if (parseInt(txtTickets.value) >= 10) {
        discountPrice = showPrice - ((showPrice / 100) * 15);
        percent = 15;
    }
    switch (txtDelivery.value) {
        case "eTicket":
            finalCost = discountPrice + delEticket;
            totalCost = showPrice + delEticket;
            deliveryCost = delEticket;
            break;
        case "Posted":
            finalCost = discountPrice + delPosted;
            totalCost = showPrice + delPosted;
            deliveryCost = delPosted;
            break;
        case "Collection Box Office":
            finalCost = discountPrice + delCollection;
            totalCost = showPrice + delCollection;
            deliveryCost = delCollection;
            break;
    }
    
    discount = showPrice - discountPrice
    
    txtOutput.innerText = 
    (`Booked for: ${txtName.value}
    \nTotal cost: ${totalCost.toFixed(2)} 
    \n ${txtTickets.value} Tickets for Show: ${txtShow.value} at: £${ticketPrice.toFixed(2)} per ticket
    \n ${percent}% Discount Price: £${discount.toFixed(2)}
    \n Delivery Method: ${txtDelivery.value}
    \n Delivery Cost: £${deliveryCost.toFixed(2)}
    \n Final Cost: £${finalCost.toFixed(2)}`)  
}



