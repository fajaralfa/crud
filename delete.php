<?php

include_once("config.php");

$id = $_POST['id'];
if($mysqli->query("DELETE FROM students WHERE id=$id") === true){
    echo "success removing row";
}else{
    echo "error: ".$mysqli->error;
}

?>
<br><a href="/">Go Back</a>
