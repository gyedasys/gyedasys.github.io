<?php

// Email address verification
function isEmail($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    // Enter the email where you want to receive the message
    $emailTo = 'abazibu@abazibu.org';

    $name = addslashes(trim($_POST['name']));
    $email = addslashes(trim($_POST['email']));
    $message = addslashes(trim($_POST['message']));

    $array = array('nameMessage' => 'nameMessage', 'emailMessage' => 'emailMessage', 'messageMessage' => 'messageMessage');

    if($name == '') {
        $array['nameMessage'] = 'Empty name!';
    }
    if(!isEmail($email)) {
        $array['emailMessage'] = 'Invalid email!';
    }
    if($message == '') {
        $array['messageMessage'] = 'Empty message!';
    }
    if($name != '' && isEmail($email) && $message != '') {
        // Send email
		$headers = "From: " . $email . " <" . $email . ">" . "\r\n" . "Reply-To: " . $email;
		mail($emailTo, $message, $headers);
    }

    echo json_encode($array);

}

?>
