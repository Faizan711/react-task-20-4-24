<?php
require 'db_connection.php';

$title = $_POST['title'];
$priority = $_POST['priority'];

$sql = "INSERT INTO tasks (title, priority) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $title, $priority);

if ($stmt->execute()) {
  echo "New task created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();