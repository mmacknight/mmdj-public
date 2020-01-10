<?php
require 'database.php';

$user_id = ($_GET['id'] !== null && (int)$_GET['id'] > -1)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;



?>
