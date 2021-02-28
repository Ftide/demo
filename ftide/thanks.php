<?php

	if(isset($_POST['submit'])){
	$email = $_POST['email'];



	$formcontent=" Ftide Newsletter Suscribition:\n
	Email: $email \n ";
	$recipient = "ftide.tech@gmail.com,sujanpal79@gmail.com,anirban1300@gmail.com,deyhiraj@gmail.com,shawan1008@gmail.com";
	$subject = "Codezi Health Care -Newsletter Suscribition Email";
	$mailheader = "From: $email \n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	echo '<script language="javascript">alert("Thank you for Suscribe Our Newsletter")</script>';
	echo '<script language="javascript">window.location.href="index.html"</script>';
	}
	else{
	echo 'Sorry';
	}
?>