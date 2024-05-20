<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "workoutplanner";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, title, type, muscle, equipment ,difficulty FROM exercises";
$result = $conn->query($sql);

$exercises = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        array_push($exercises, $row);
    }
    echo json_encode($exercises);
} else {
    echo json_encode([]);
}

$conn->close();
?>
