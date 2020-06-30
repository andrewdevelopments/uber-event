<?php



// Get some important variables
require_once( '../config.php' );

// Add your email address below
$TO_EMAIL = $Event_Submission_EA;

// Subject for emails
$SUBJECT = $Event_Submission_Subject;

if( !isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['event-title']) || !isset($_POST['event-date']) ) {
    $output = json_encode(
        array(
            'type'=>'error',
            'text' => 'Input fields are empty!'
        )
    );
    die($output);
}


$ORGANIZER                  = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
$ORGANIZER_EMAIL            = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$EVENT_TITLE                = filter_var($_POST["event-title"], FILTER_SANITIZE_STRING);
$EVENT_DATE                 = filter_var($_POST["event-date"], FILTER_SANITIZE_STRING);
$EVENT_START                = filter_var($_POST["event-start-hour"], FILTER_SANITIZE_STRING);
$EVENT_END                  = filter_var($_POST["event-end-hour"], FILTER_SANITIZE_STRING);
$EVENT_ADDRESS              = filter_var($_POST["event-address"], FILTER_SANITIZE_STRING);
$COVER_IMAGE                = filter_var($_POST["image"], FILTER_SANITIZE_STRING);
$SPEAKER                    = filter_var($_POST["speaker"], FILTER_SANITIZE_STRING);
$SPEAKER_OCCUPATION         = filter_var($_POST["speaker-occupation"], FILTER_SANITIZE_STRING);
$EVENT_CATEGORY             = filter_var($_POST["event-category"], FILTER_SANITIZE_STRING);
$EVENT_REGION               = filter_var($_POST["event-region"], FILTER_SANITIZE_STRING);
$EVENT_TAGS                 = filter_var($_POST["event-tags"], FILTER_SANITIZE_STRING);
$EVENT_DESCRIPTION          = filter_var($_POST["event-description"], FILTER_SANITIZE_STRING);
$EVENT_SOCIAL               = filter_var($_POST["event-social-links"], FILTER_SANITIZE_STRING);
$EVENT_TYPE                 = filter_var($_POST["register-type"], FILTER_SANITIZE_STRING);
$EVENT_COUNTDOWN            = filter_var($_POST["event-countdown"], FILTER_SANITIZE_STRING);
$EVENT_VIDEO                = filter_var($_POST["video"], FILTER_SANITIZE_STRING);
$EVENT_PDF                  = filter_var($_POST["pdf"], FILTER_SANITIZE_STRING);


// Validate email
if( !filter_var($ORGANIZER_EMAIL, FILTER_VALIDATE_EMAIL) ) {
    $output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
    die($output);
}

$body = 'Name: ' . $ORGANIZER . "\n\n" .
        'Email address: ' . $ORGANIZER_EMAIL . "\n\n" .
        'Event Title: ' . $EVENT_TITLE . "\n\n" .
        'Event Date: ' . $EVENT_DATE . "\n\n" .
        'Start At: ' . $EVENT_START . "\n\n" .
        'End At: ' . $EVENT_END . "\n\n" .
        'Event Address: ' . $EVENT_ADDRESS . "\n\n" .
        'Speaker: ' . $SPEAKER . "\n\n" .
        'Speaker Occupation: ' . $SPEAKER_OCCUPATION . "\n\n" .
        'Cover Image: ' . $COVER_IMAGE . "\n\n" .
        'Category: ' . $EVENT_CATEGORY . "\n\n" .
        'Region: ' . $EVENT_REGION . "\n\n" .
        'Tags: ' . $EVENT_TAGS . "\n\n" .
        'Description: ' . $EVENT_DESCRIPTION . "\n\n" .
        'Social Links: ' . $EVENT_SOCIAL . "\n\n" .
        'Event Type: ' . $EVENT_TYPE . "\n\n" .
        'Countdown: ' . $EVENT_COUNTDOWN . "\n\n" .
        'Video URL: ' . $EVENT_VIDEO . "\n\n" .
        'PDF: ' . $EVENT_PDF . "\n\n";

$headers = array(
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 7bit',
    'Date: ' . date('r', $_SERVER['REQUEST_TIME']),
    'Message-ID: <' . $_SERVER['REQUEST_TIME'] . md5($_SERVER['REQUEST_TIME']) . '@' . $_SERVER['SERVER_NAME'] . '>',
    'From: ' . mb_encode_mimeheader($ORGANIZER) . '" <' . $TO_EMAIL . '>',
    'Reply-To: ' . $ORGANIZER_EMAIL,
    'X-Mailer: PHP v' . phpversion(),
    'X-Originating-IP: ' . $_SERVER['SERVER_ADDR'],
);

mail($TO_EMAIL, '=?UTF-8?B?' . base64_encode($SUBJECT) . '?=', $body, implode("\r\n", $headers));