<?php
/*
	Jacob Landowski
	12 - 9 - 17
	Renders the login form, will check POST for data entries and validate
	accordingly. 
*/

	//	IF ALREADY LOGGED IN, RENDER TABLE INSTEAD
if(isset($_SESSION['userid']) && $_SESSION['userid'] == 2)
{
	include('contact_table.php');
	return;
}

	//	ATTEMPT TO FETCH USER LOGIN FROM DATABASE
	//	RETURNS NULL IF NOT SUCCESSFUL
function getUserId($connection, $username, $password)
{
	$clean_username = mysqli_real_escape_string($connection, $username);
	$clean_password = mysqli_real_escape_string($connection, $password);

	$result = mysqli_query($connection, "SELECT id FROM Users WHERE username = '$clean_username' AND password = SHA1('$clean_password')");
	
	$userid = null;
	
	if($result && mysqli_num_rows($result) == 1)
	{
		while($row = mysqli_fetch_assoc($result))
		{
			$userid = $row['id'];
		}
	}
	
	return $userid;
}

$post = $_SERVER['REQUEST_METHOD'] === 'POST' ? $_POST : null;

$username = '';
$password = '';
$invalidLogin = false;
$errors   = [];

if(isset($post))
{
	session_start();

	require_once('../../../portfolio_private_assets/db_connect.php');
	
	$username = isset($post['user_name']) ? $post['user_name'] : '';
	$password = isset($post['pass_word']) ? $post['pass_word'] : '';
	
	if(empty($username))
	{
		$errors['username'] = 'You need to provide a username!';
	}
	elseif(strlen($username) > 20) 
	{
		$errors['username'] = 'Username must not exceed 20 characters!';
	}
	
	if(empty($password))
	{
		$errors['password'] = 'You need to provide a password!';
	}
	elseif(strlen($password) > 40) 
	{
		$errors['password'] = 'Password must not exceed 40 characters!';
	}

	if(empty($errors)) // NO ERRORS, PROCESS
	{
			//	IF USERID WAS FOUND AND ASSIGNED HERE THEN...
		if($userid = getUserId($connection, $username, $password))
		{
			$_SESSION['userid'] = $userid;
			include('contact_table.php');
			return;
		}
		else
		{
			$invalidLogin = true;
		}
	}
}

?>
<div class="col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
	<div class="tm-flex tm-contact-container">
		<div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">

			<h2 class="tm-contact-info">Admin</h2>
			<p class="tm-text"></p>

			<form action="includes/login_form.php" method="post" class="tm-contact-form">

				<div class="form-group">
				<?php echo $invalidLogin ? "<div class=\"invalid-feedback d-block\">Invalid Login</div>" : '' ?>
				<input value="<?php echo $username ?>"
					   type="text" 
					   id="user_name" 
					   name="user_name" 
					   class="form-control <?php echo isset($errors['username']) || $invalidLogin ? 'is-invalid' : (isset($post) ? 'is-valid' : ''); ?>" 
					   placeholder="Username"/>
				<?php echo isset($errors['username']) ? "<div class=\"invalid-feedback\">{$errors['username']}</div>" : '' ?>
				</div>

				<div class="form-group">
				<input type="password" 
					   id="pass_word" 
					   name="pass_word" 
					   class="form-control <?php echo isset($errors['password']) || $invalidLogin ? 'is-invalid' : (isset($post) ? 'is-valid' : ''); ?>"
					   placeholder="Password"/>
				<?php echo isset($errors['password']) ? "<div class=\"invalid-feedback\">{$errors['password']}</div>" : '' ?>
				</div>

				<button type="submit" class="pull-xs-right tm-submit-btn">Login</button>

			</form>
		</div>
	</div>
</div>