<?php
include_once '../Repository/userRepository.php';
$userId = $_GET['Id'];

$userRepository = new UserRepository();

$user = $userRepository->getUserById($userId);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Edit.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>    
    <title>Document</title>
</head>
<body>
    <h3>Edit User</h3>
    <br><br>
    <div class="table">
        <form action="" method="post">
            <input type="text" name="Id" id="input" value="<?=$user['Id']?>" readonly> <br> <br>
            <input type="text" name="Firstname" id="input"  value="<?=$user['Firstname']?>"> <br> <br>
            <input type="text" name="Lastname" id="input"  value="<?=$user['Lastname']?>"> <br> <br>
            <input type="text" name="Email" id="input"  value="<?=$user['Email']?>"> <br> <br>
            <input type="text" name="Username" id="input"  value="<?=$user['Username']?>"> <br> <br>
            <input type="text" name="Password" id="input"  value="<?=$user['Password']?>"> <br> <br>

            <input type="submit" name="editBtn" id="button" value="Update"> <br> <br>
        </form>
    </div>
</body>
</html>

<?php 

if(isset($_POST['editBtn'])){
    $Id = $user['Id'];
    $Firstname = $_POST['Firstname'];
    $Lastname = $_POST['Lastname'];
    $Email = $_POST['Email'];
    $Username = $_POST['Username'];
    $Password = $_POST['Password'];

    $userRepository->updateUser($Id,$Firstname,$Lastname,$Email,$Username,$Password);
    header("location:Dashboard.php");
}


?>