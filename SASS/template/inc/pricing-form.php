<?php

// Get some important variables
require_once( '../config.php' );

// Add your email address below
$TO_EMAIL = $Pricing_Form_EA;

// Subject for emails
$SUBJECT = $Pricing_Form_Subject;

if( !isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['phone']) || !isset($_POST['pricing']) ) {
    $output = json_encode(
        array(
            'type'=>'error',
            'text' => 'Input fields are empty!'
        )
    );
    die($output);
}

$NAME               = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
$EMAIL              = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$PHONE              = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
$PRICE_TYPE         = filter_var($_POST["pricing"], FILTER_SANITIZE_STRING);
$PRICE_DESCRIPTION  = filter_var($_POST["pricing-description"], FILTER_SANITIZE_STRING);

if( isset($_POST['coupon']) ) {
    $COUPON = filter_var($_POST["coupon"], FILTER_SANITIZE_STRING);
    $HAVE_COUPON =  "\n\n" . 'Coupon code : ' . $COUPON;
}
else {
    $HAVE_COUPON = '';
}


// Validate email
if( !filter_var($EMAIL, FILTER_VALIDATE_EMAIL) ) {
    $output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
    die($output);
}



$body = 'Name: ' . $NAME . "\n\n" . 'Email address: ' . $EMAIL . "\n\n" . 'Phone: ' . $PHONE . "\n\n" . 'Plan type: ' . $PRICE_TYPE . "\n\n" . 'Plan description : ' . $PRICE_DESCRIPTION . $HAVE_COUPON;

$headers = array(
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 7bit',
    'Date: ' . date('r', $_SERVER['REQUEST_TIME']),
    'Message-ID: <' . $_SERVER['REQUEST_TIME'] . md5($_SERVER['REQUEST_TIME']) . '@' . $_SERVER['SERVER_NAME'] . '>',
    'From: ' . mb_encode_mimeheader($NAME) . '" <' . $TO_EMAIL . '>',
    'Reply-To: ' . $EMAIL,
    'X-Mailer: PHP v' . phpversion(),
    'X-Originating-IP: ' . $_SERVER['SERVER_ADDR'],
);

mail($TO_EMAIL, '=?UTF-8?B?' . base64_encode($SUBJECT) . '?=', $body, implode("\r\n", $headers));