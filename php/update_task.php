<?php
require 'db_connection.php';

$id = $_POST['id'];
$title = $_POST['title'];
$priority = $_POST['priority'];

$sql = "UPDATE tasks SET title = ?, priority = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $title, $priority, $id);

if ($stmt->execute()) {
  echo "Task updated successfully";
} else {
  echo "Error updating task: " . $conn->error;
}

$stmt->close();
$conn->close();