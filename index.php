<?php

include_once("config.php");

$result = mysqli_query($mysqli, "SELECT * FROM students;");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>CRUD</title>
</head>
<body>

<div class="crudSection">

<div class="nav">
    <button class="btn" onclick="suitch(1)">Create</button>
    <button class="btn dBtn" onclick="suitch(2);">Read</button>
    <button class="btn" onclick="suitch(3)">Update</button>
    <button class="btn" onclick="suitch(4)">Delete</button>
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
            <th>Id</th>
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
    <form id="updateForm" action="/update.php" method="POST">
        <label for="id">target id (click Read to show): </label><br>
        <input type="text" name="id"><br>
        Name<br><input type="text" name="name"><br>
        Address<br><input type="text" name="address"><br><br>
        <input type="submit" value="submit" id="submit"><br>
    </form>
</div>

<div class="deleteSection">
    <form id="deleteForm" action="/delete.php" method="POST">
        <label for="id">target id (click Read to show): </label><br>
        <input type="text" name="id"><br><br>
        <input type="submit" value="submit" id="submit">
    </form>
</div>

</div>

<script src="script.js"></script>
</body>
</html>
