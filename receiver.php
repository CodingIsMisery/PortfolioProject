<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set the recipient email address
  $to = 'oge@duck.com';

  // Set the email subject and message
  $subject = 'New Contact Form Submission';
  $message = "Name: $name\nEmail: $email\nMessage: $message";

  // Set the email headers
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion();

  // Send the email
  if (mail($to, $subject, $message, $headers)) {
    // Send a success response to the client
    header('HTTP/1.1 200 OK');
    echo 'Your email has been sent';
  } else {
    // Send an error response to the client
    header('HTTP/1.1 500 Internal Server Error');
    echo 'There was a problem sending your email';
  }
} else {
  // Send a bad request response to the client
  header('HTTP/1.1 400 Bad Request');
  echo 'Invalid request';
}
?>