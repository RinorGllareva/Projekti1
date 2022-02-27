<?php 
include_once '../Database/databaseConnection.php';

class UserRepository{
    private $connection;

    function __construct(){
        $conn = new DatabaseConenction;
        $this->connection = $conn->startConnection();
    }


    function insertUser($user){//shkruje $user

        $conn = $this->connection;

        $Id = $user->getId();
        $Firstname = $user->getFirstname();
        $Lastname = $user->getLastname();
        $Email = $user->getEmail();
        $Username = $user->getUsername();
        $Password = $user->getPassword();

        $sql = "INSERT INTO user (Id,Firstname,Lastname,Email,Username,Password) VALUES (?,?,?,?,?,?)";

        $statement = $conn->prepare($sql);

        $statement->execute([$Id,$Firstname,$Lastname,$Email,$Username,$Password]);
        // $statement->execute(['1111','Selmin','Lekovic','selmin@gmail.com','selmin','12345678']);

        echo "<script> alert('User has been inserted successfuly!'); </script>";

    }

    function getAllUsers(){
        $conn = $this->connection;

        $sql = "SELECT * FROM user";

        $statement = $conn->query($sql);
        $users = $statement->fetchAll();

        return $users;
    }

    function getUserById($Id){
        $conn = $this->connection;

        $sql = "SELECT * FROM user WHERE id='$Id'";

        $statement = $conn->query($sql);
        $user = $statement->fetch();

        return $user;
    }

    function updateUser($Id,$Firstname,$Lastname,$Email,$Username,$Password){
         $conn = $this->connection;

         $sql = "UPDATE user SET Firstname=?, Lastname=?, Email=?, Username=?, Password=? WHERE id=?";

         $statement = $conn->prepare($sql);

         $statement->execute([$Firstname,$Lastname,$Email,$Username,$Password,$Id]);

         echo "<script>alert('update was successful'); </script>";
    } 

    function deleteUser($Id){
        $conn = $this->connection;

        $sql = "DELETE FROM user WHERE Id=?";

        $statement = $conn->prepare($sql);

        $statement->execute([$Id]);

        echo "<script>alert('delete was successful'); </script>";
   } 
}

// $userRepo = new UserRepository;
// $userRepo->insertUser();
//  $userRepo->updateUser('1111','SSS','SSS','SSS','SSS','SSS');

?>