<?php
// Get the JSON data from the request
$data = file_get_contents('php://input');
$transaction = json_decode($data, true);

// Process the transaction (e.g., save to database)
$transactionId = $transaction['TransID'];
$amount = $transaction['TransAmount'];
$phoneNumber = $transaction['MSISDN'];

// Log the transaction for your records
file_put_contents('confirmation_log.txt', $data, FILE_APPEND);

// Respond to Safaricom to acknowledge receipt of the transaction
$response = [
    'ResultCode' => 0, // Success
    'ResultDesc' => 'Transaction Confirmed'
];
echo json_encode($response);
?>
