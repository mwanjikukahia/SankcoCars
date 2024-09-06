<?php
function registerUrls() {
    $consumerKey = '5O1xJ49Rv5sOh9rtuXbwpeGK2vDryJGZ36Me4pIDz1lykW9I';
    $consumerSecret = 'lmpAicADsGMMNp8sTp6oUSeAchYYIhlrA4M18YburhDsEGOwqrONyyGVAqBtrxLo';
    $shortcode = 'N/A';
    
    // Get the access token
    $credentials = base64_encode($consumerKey . ':' . $consumerSecret);
    $url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Authorization: Basic ' . $credentials]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    curl_close($ch);

    $accessToken = json_decode($response)->access_token;

    // Register the URLs
    $registerUrl = 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl';
    $urls = [
        'ShortCode' => $shortcode,
        'ResponseType' => 'Completed',
        'ConfirmationURL' => 'https://yourdomain.com/confirmation.php',
        'ValidationURL' => 'https://yourdomain.com/validation.php',
    ];

    $ch = curl_init($registerUrl);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $accessToken,
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($urls));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response);
}

// Call this function to register your URLs
registerUrls();
?>
