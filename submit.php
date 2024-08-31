<?php

include"config.php";





if(isset($_POST["submit"]))
{
    $name = $_POST["name"];
    $message = $_POST["name"];




$sql = "INSERT INTO feedback (name,message) VALUES('$name','$message')";

$result = mysqli_query($conn, $sql);

echo "Feedback submitted  successfully";




}


?>