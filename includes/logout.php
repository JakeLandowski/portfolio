<?php
/*
	Jacob Landowski
	12 - 9 - 17
	Kills the user's session and "redirects" to login form
	Ajaxing so I just render the login form as a response instead of redirecting.
*/

session_start();

if(isset($_SESSION['userid'])) 
{
	unset($_SESSION['userid']);
	session_destroy();
	
	include('login_form.php');
}