<?php
require 'db_connection.php';

$id = $_POST['id'];

$sql = "DELETE FROM tasks WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
  echo "Task deleted successfully";
} else {
  echo "Error deleting task: " . $conn->error;
}

$stmt->close();
$conn->close();
