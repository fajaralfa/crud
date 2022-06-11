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

<div class="nav">
    <button class="btn" onclick="createBtn.show()">Create</button>
    <button class="btn" onclick="readBtn.show()">Read</button>
    <button class="btn" onclick="updateBtn.show()">Update</button><br>
    <button class="btn" onclick="delBtn.show()">Delete</button>
</div>

<div class="createSection">
    <form id="createForm" action="/create.php" method="POST">
        Name<br><input type="text" name="name"><br>
        Address<br><input type="text" name="address"><br><br>
        <input type="submit" value="submit" id="submit"><br>
    </form>
</div>

<div class="readSection">
    <table id="database">
        <tr>
            <th>id</th>
            <th>Name</th>
            <th>Address</th>
        </tr>
    <?php
    while($data = mysqli_fetch_array($result)){
        echo "<tr>";
        echo "<td>".$data['id']."</td>";
        echo "<td>".$data['name']."</td>";
        echo "<td>".$data['address']."</td>";
        echo "</tr>";
    }
    ?>
    </table>
</div>
<?php
    echo mysqli_fetch_array($result);
    ?>
<div class="updateSection">
    <form id="updateForm" action="/update.php">
        <label for="tname">Type target id (click read to show target id): </label><br>
        <input type="text" name="id"><br><br>
        Name<br><input type="text" name="name"><br>
        Address<br><input type="text" name="address"><br><br>
        <input type="submit" value="submit" id="submit"><br>
    </form>
</div>

<div class="deleteSection">
    <form id="deleteForm" action="">
        <input type="radio">test
        <input type="radio">test
    </form>
</div>

<script src="script.js"></script>
</body>
</html>
