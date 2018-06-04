<?php
/*
	Jacob Landowski
	12 - 9 - 17
	Dumps my resume PDF from a secure directory.
*/

$file = "../../../portfolio_private_assets/Resume_JacobLandowski.pdf"; 
$fp = fopen($file, "r") or die('Unable to find Resume PDF');

header("Cache-Control: maxage=1");
header("Pragma: public");
header("Content-type: application/pdf");
header('Content-Disposition: inline; filename="Resume_JacobLandowski.pdf"');
header("Content-Description: PHP Generated Data");
header("Content-Transfer-Encoding: binary");
header('Content-Length:' . filesize($file));
ob_clean();
flush();
$buff = '';
while (!feof($fp)) {
   $buff .= fread($fp, 1024);
}
print $buff;