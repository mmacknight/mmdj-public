<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//phpinfo();
ini_set('display_errors', 1);

define('DB_HOST', 'database-1.cnpfjjnqq3mw.us-east-2.rds.amazonaws.com');
define('DB_USER', 'admin');
define('DB_PASS', 'password');
define('DB_NAME', 'mmdj');
define('DB_PORT', '3306');

function connect()
{
  $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();
$var = 13;
?>
