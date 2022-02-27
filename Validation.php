<?php
    session_start();

    include_once '../Repository/userRepository.php';

    if(isset($_POST['submit'])){
        $Username = $_POST['Username'];
        $Email= $_POST['Email'];
        $Password = $_POST['Password'];
        $Roleid = $_POST['Roleid'];

        if(adminLogin($Roleid)){
            header("Location: HomeAdmin.php");
        }
        if(validateEmptyDate($Username,$Email,$Password)){
             header("Location: Login.php");
        }
        else if(validateData($Username,$Email,$Password)){
            header("Location: Home.php");
        }
        else if(adminLogin($Username,$Email,$Password)){
            header("Location : HomeAdmin.php");
        }
        else{
            header("Location: Login.php");
        }
    }

    function validateEmptyDate($Username,$Email,$Password){
        if(empty($Email) || empty($Password) || empty($Username)){
            return true;
        }
        return false;
    }

    function validateData($Username,$Email,$Password){
        global $allUser;

        foreach($allUser as $user){
            if($user['Email'] == $Email && $user['Password'] == $Password && $user['Username'] == $Username){
                $_SESSION['Roleid'] = $user['Roleid'];
                $_SESSION['Firstname']=$user['Firstname'];
                return true;
            }
        }
        return false;
    }
    
    function adminLogin($Roleid){

        global $allUser;

        foreach($allUser as $user){
            if($user['Email'] == $Email && $user['Password'] == $Password && $user['Username'] == $Username && $user['Roleid'] == 1){
                return true;
            }
        }
        return false;
    }
    

?>