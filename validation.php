<?php
// Get the JSON data from the request
$data = file_get_contents('php://input');
$transaction = json_decode($data, true);

// Validate the transaction (e.g., check if the amount is correct)
$amount = $transaction['TransAmount'];

// If the validation is successful, respond with a success code
$response = [
    'ResultCode' => 0, // Success
    'ResultDesc' => 'Transaction Validated Successfully'
];

// If validation fails, respond with an error code
// $response = [
//     'ResultCode' => 1, // Fail
//     'ResultDesc' => 'Transaction Validation Failed'
// ];

echo json_encode($response);
?>
