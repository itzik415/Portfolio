<?php

    $name = strip_tags(trim($_POST["name"]));
    $name = strip_replace(array("\r","\n"),array(" ", " "),$name);
    $email = filter_var(trim($_POST["email"]), FILLTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://www.itzikshaoulian.net/index.php?success=-1#form");
        exit;
    }

    //Send it to our mail
    $recipient = "itzikshaoulian@gmail.com";

    //Email subject
    $subject = "New contact from $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    mail($recipient, $subject, $email_content, $email_headers);

    header("Location: http://www.itzikshaoulian.net/index.php?success=1#form");
?>
