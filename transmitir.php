<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if(isset($_POST["testePHP"])){
            $retornoPHP = "OK - ".phpversion();
            echo($retornoPHP);
            exit();
        }
    }else{
        exit();
    }
?>