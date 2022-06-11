<?php

include_once("config.php");
    
$name = $_POST["name"];
$address = $_POST["address"];

if($mysqli->query("INSERT INTO students(name, address) VALUES('$name', '$address');") == TRUE){
    echo "adding data success";
}else{
    echo "error adding data: ".$mysqli->error;
}

?>
