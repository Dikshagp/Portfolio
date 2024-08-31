<?php

$host = "localhost";
$username= "root";
$password= null;
$dbname ="portfolio";

$conn = new mysqli($host, $username, $password,$dbname);

if($conn)
{
    echo "Connection success";
}
else{
    die( mysqli_error($conn));
}



?>