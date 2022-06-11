<?php

include_once("config.php");

$tname = $_POST["tname"];
$name = $_POST["fname"];
$birth = $_POST["birth"];
$address = $_POST["address"];

if($mysqli->query("UPDATE students SET name = '$name', birth_day = '$birth', address = '$address' WHERE name = '$tname';") == TRUE){
    echo "success updating data";
}else{
    echo "error updating data".$mysqli->error;
}
?>
