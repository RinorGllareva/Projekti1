<?php

$userId = $_GET['Id'];
include_once '../Repository/userRepository.php';



$userRepository = new UserRepository();

$userRepository->deleteUser($userId);

header("location:Dashboard.php");


?>