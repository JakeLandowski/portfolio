<?php
/*
	Jacob Landowski
	12 - 9 - 17
	Renders the Contact Form, also handles the POST data validation
	and inserts if valid.
*/

function logContactMessage($name, $email, $message)
{
	require_once('../../../portfolio_private_assets/db_connect.php');
	
	$clean_name    = mysqli_real_escape_string($connection, $name);
	$clean_email   = mysqli_real_escape_string($connection, $email);
	$clean_message = mysqli_real_escape_string($connection, $message);
	
	$result = mysqli_query($connection, "INSERT INTO Contacted_Me (name, email, message) VALUES ('$clean_name', '$clean_email', '$clean_message')");
	
	if($result)
	{
		// success so print thank you message and option to go back
	}
}

$post = $_SERVER['REQUEST_METHOD'] === 'POST' ? $_POST : null;

$name    = '';
$email   = '';
$message = '';
$errors  = [];

if(isset($post))
{
	$name    = isset($post['contact_name'])    ? $post['contact_name']    : '';
	$email   = isset($post['contact_email'])   ? $post['contact_email']   : '';
	$message = isset($post['contact_message']) ? $post['contact_message'] : '';

	if(empty($name)) 
	{
		$errors['name'] = 'Please tell me who you are!';
	}
	elseif(strlen($name) > 40) 
	{
		$errors['name'] = 'Please enter a name with 40 characters or less!';
	}
	
	if(empty($email)) 
	{
		$errors['email'] = 'Please provide an email!';
	}
	elseif(strlen($email) > 40) 
	{
		$errors['email'] = 'Please enter an email with 40 characters or less!';
	}
	elseif(!filter_var($email, FILTER_VALIDATE_EMAIL))
	{
		$errors['email'] = 'Please enter a valid email!';
	}
	
	if(empty($message))
	{
		$errors['message'] = 'Please tell me something cool!';
	}
	elseif(strlen($message) > 5000) 
	{
		$errors['message'] = 'Please keep your message under 5000 characters!';
	}

	if(empty($errors)) // NO ERRORS, PROCESS
	{
		logContactMessage($name, $email, $message);

		include('contact_success.php');
		return;
	}
}

?>
<div class="form-group">
	<input value="<?php echo $name ?>" 
		   type="text" 
		   id="contact_name" 
		   name="contact_name" 
		   class="form-control <?php echo isset($errors['name']) ? 'is-invalid' : '' ?>" 
		   placeholder="Name"/>
	<?php echo isset($errors['name']) ? "<div class=\"invalid-feedback\">{$errors['name']}</div>" : '' ?>
</div>

<div class="form-group">
	<input value="<?php echo $email ?>"
		   type="text"
		   id="contact_email"
		   name="contact_email" 
		   class="form-control <?php echo isset($errors['email']) ? 'is-invalid' : '' ?>"
		   placeholder="Email"/>
	<?php echo isset($errors['email']) ? "<div class=\"invalid-feedback\">{$errors['email']}</div>" : '' ?>
</div>

<div class="form-group">
	<textarea id="contact_message" 
			  name="contact_message"
			  class="form-control <?php echo isset($errors['message']) ? 'is-invalid' : '' ?>"
			  rows="5"
			  placeholder="Message"><?php echo $message ?></textarea>
	<?php echo isset($errors['message']) ? "<div class=\"invalid-feedback\">{$errors['message']}</div>" : '' ?>
</div>

<button type="submit" class="pull-xs-right tm-submit-btn">Message Jake</button>