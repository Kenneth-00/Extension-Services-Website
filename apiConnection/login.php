<?php

    include ('db_conn.php');

    $_POST = file_get_contents("php://input");

    var_dump($_POST);

    if (!empty($_POST)) {

        $_REQUEST = json_decode($_POST);

        $email = mysqli_real_escape_string($connect, trim($_REQUEST -> email));

        $sql = "INSERT INTO logs (email)
                VALUES ('$email')";

        $result = mysqli_query($connect, $sql);

        var_dump($sql);

        if ($result) {
            //http_response_code(200);
            print_r('OK');
        }
        else{
            http_response_code(400);
        }
    }

?>