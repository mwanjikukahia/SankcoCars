function initiatePayment(carId, price) {
    // Ask for the user's phone number
    const phoneNumber = prompt("Please enter your phone number (format: 2547xxxxxxxx):");

    // Ensure the phone number is provided and in the correct format
    if (phoneNumber && phoneNumber.startsWith("2547") && phoneNumber.length === 12) {
        // Send payment request to your server
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                carId: carId, // Unique ID of the car being purchased
                amount: price, // Dynamic price of the car
                phoneNumber: phoneNumber, // Customer's phone number
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Notify the user that the payment request has been sent
            alert("Payment request sent. Please check your phone to complete the payment.");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("There was an error initiating the payment. Please try again.");
        });
    } else {
        alert("Invalid phone number. Please try again.");
    }
}
