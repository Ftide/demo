<?php

// if the url field is empty, but the message field isn't
if(isset($_POST['url']) && $_POST['url'] == '' && $_POST['message'] != ''){

	// put your email address here
	$youremail = 'ftide.tech@gmail.com,sujanpal79@gmail.com,anirban1300@gmail.com,deyhiraj@gmail.com,shawan1008@gmail.com';

	// prepare a "pretty" version of the message
	// Important: if you added any form fields to the HTML, you will need to add them here also
	$body = "Ftide Technologies  - Contact us form that was just submitted:
	First Name: $_POST[fname]
	Last Name: $_POST[lname]
	Phone: $_POST[phone]
	E-Mail: $_POST[email]
	Message: $_POST[message]";

	// Use the submitters email if they supplied one
	// (and it isn't trying to hack your form).
	// Otherwise send from your email address.
	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	// finally, send the message
	mail($youremail, 'Ftide Technologies - Contact us Form', $body, $headers );
	//echo "message sent";

}

// otherwise, let the spammer think that they got their message through

// uncomment these lines to redirect instead of displaying HTML
header('Location:https://dlwhosting.com/demo/starksteel');
exit('Redirecting you to https://dlwhosting.com/demo/starksteel/');

?>
