<?php
function initiateMpesaPayment($amount, $phoneNumber) {
    $consumerKey = '5O1xJ49Rv5sOh9rtuXbwpeGK2vDryJGZ36Me4pIDz1lykW9I';
    $consumerSecret = 'lmpAicADsGMMNp8sTp6oUSeAchYYIhlrA4M18YburhDsEGOwqrONyyGVAqBtrxLo';
    
    // Get the access token
    $credentials = base64_encode($consumerKey . ':' . $consumerSecret);
    $url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Authorization: Basic ' . $credentials]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    curl_close($ch);

    $accessToken = json_decode($response)->access_token;

    // Make the payment request
    $paymentUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    $paymentData = [
        'BusinessShortCode' => 'YOUR_SHORTCODE',
        'Password' => base64_encode('YOUR_SHORTCODE' . 'PASSKEY' . date('YmdHis')),
        'Timestamp' => date('YmdHis'),
        'TransactionType' => 'CustomerPayBillOnline',
        'Amount' => $amount,
        'PartyA' => $phoneNumber,
        'PartyB' => 'YOUR_SHORTCODE',
        'PhoneNumber' => $phoneNumber,
        'CallBackURL' => 'https://yourdomain.com/confirmation.php',
        'AccountReference' => 'Car Payment',
        'TransactionDesc' => 'Payment for Car',
    ];

    $ch = curl_init($paymentUrl);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Authorization: Bearer ' . $accessToken]);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($paymentData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response);
}

// Example call to initiate payment
initiateMpesaPayment(9745, '2547xxxxxxxx');
?>
