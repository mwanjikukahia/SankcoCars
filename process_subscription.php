<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $subscription_type = $_POST['subscription_type'];

    if ($subscription_type == 'individual') {
        $plan = $_POST['individual_plan'];
        $kra_pin = $_POST['individual_kra_pin'];
        $id = $_POST['individual_id'];

        // Process individual subscription data here
    } elseif ($subscription_type == 'company') {
        $plan = $_POST['company_plan'];
        $kra_pin_certificate = $_FILES['company_kra_pin'];
        $incorporation_certificate = $_FILES['company_incorporation'];

        // Process company subscription data here
    }

    // Save the subscription details in your database
    // Redirect to the next step or a confirmation page
}
