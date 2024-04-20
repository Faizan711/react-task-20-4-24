<?php
require 'db_connection.php';

$sql = "SELECT id, title, priority FROM tasks";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Title: " . $row["title"]. " - Priority: " . $row["priority"]. "<br>";
  }
} else {
  echo "0 results";
}

