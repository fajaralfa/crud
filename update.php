<?php

include_once("config.php");

$id = $_POST["id"];
$name = $_POST["name"];
$address = $_POST["address"];

if($mysqli->query("UPDATE students SET name = '$name', address = '$address' WHERE id = $id;") == TRUE){
    echo "success updating data";
}else{
    echo "error updating data".$mysqli->error;
}
?>
