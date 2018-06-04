<?php
/*
	Jacob Landowski
	12 - 9 - 17
	Renders the Contact Table, pulling rows from Contacted database table
*/

if(!isset($_SESSION)) session_start();

if($_SESSION['userid'] != 2)
{
    echo '<p>You are not logged in to view this!</p>';
    include('login_form.php');
    return;
}

if(!isset($connection)) require_once(dirname(__FILE__) . '/../../../portfolio_private_assets/db_connect.php');

function spitOutRows($connection)
{
	$result = mysqli_query($connection, "SELECT name, email, message FROM Contacted_Me");
	
        //  IF NO FAIL AND HAS ROWS
	if($result && mysqli_num_rows($result) > 0)
	{
		$name    = '';
		$email   = '';
		$message = '';
		
		while($row = mysqli_fetch_assoc($result))
		{
			$name 	 = isset($row['name']) 	  ? htmlspecialchars($row['name'])    : '';
			$email   = isset($row['email'])   ? htmlspecialchars($row['email'])   : '';
			$message = isset($row['message']) ? htmlspecialchars($row['message']) : '';
			
			echo "<tr><td><p class=\"tm-text\">$name</p></td><td><p class=\"tm-text\">$email</p></td><td><p class=\"tm-text\">$message</p></td></tr>";
		}
	}
}
?>

<div class="col-12">
	<div class="tm-flex tm-contact-container">
		<div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
		<button id="table_refresh" type="button" class="pull-xs-right tm-submit-btn mb-3"><i class="fa fa-refresh"></i></button>
		<button id="logout" type="button" class="pull-xs-right tm-submit-btn mb-3 float-right">Logout</button>
		
		<table id="contact_table" class="table table-striped table-bordered">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Message</th>
				</tr>
			</thead>
			<tbody>
				<?php  spitOutRows($connection); ?>
			</tbody>
		</table>
		</div>
	</div>
</div>