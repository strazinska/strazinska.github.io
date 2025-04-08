<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = getenv('SMTP_USERNAME'); 
    $mail->Password = getenv('SMTP_PASSWORD');
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('your-email@gmail.com', 'Your Name');
    $mail->addAddress('recipient@example.com', 'Recipient Name');

    $mail->isHTML(true);
    $mail->Subject = 'Subject of the Email';
    $mail->Body = 'HTML message body';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
