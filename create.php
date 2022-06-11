<?php

include_once("config.php");
    
$name = $_POST["fname"];
$birth = $_POST["birth"];
$address = $_POST["address"];

if($mysqli->query("INSERT INTO students VALUES('$name', '$birth', '$address');") == TRUE){
    echo "adding data success";
}else{
    echo "error adding data: ".$mysqli->error;
}

?>
