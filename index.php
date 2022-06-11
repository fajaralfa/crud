<?php

include_once("config.php");

$result = mysqli_query($mysqli, "SELECT * FROM students;");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>php show data</title>
</head>
<body>

<div class="formu">
    <button id="tmbl" onclick="createBtn.show()">Create</button>
    <form id="dForm" action="/create.php" method="POST">
        Name<br><input type="text" name="fname"><br>
        Birth<br><input type="text" name="birth"><br>
        Address<br><input type="text" name="address"><br><br>
        <input type="submit" value="submit" id="submit"><br>
    </form>
</div>

<div class="data">
    <button id="tmbl2" onclick="readBtn.show()">Read</button>
    <table id="tdata">
        <tr>
            <th>Name</th>
            <th>Birth</th>
            <th>Address</th>
        </tr>
    <?php
    while($userdata = mysqli_fetch_array($result)){
        echo "<tr>";
        echo "<td>".$userdata['name']."</td>";
        echo "<td>".$userdata['birth_day']."</td>";
        echo "<td>".$userdata['address']."</td>";
        echo "</tr>";
    }
    ?>
    </table>
</div>

<div class="updateSection">
    <button id="tmbl3" onclick="updateBtn.show()">Update</button>
    <form id="updateForm" action="/delete.php">
        Name<br><input type="text" name="fname">
    </form>
</div>

<div class="deleteSection">
    <button id="tmbl4" onclick="dBtn.show()">Delete</button>
    hello world
</div>

<script src="script.js"></script>
</body>
</html>
