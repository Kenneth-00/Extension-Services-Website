<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");
    
    

    $method = $_SERVER['REQUEST_METHOD'];

    if ($method == "OPTIONS") {
        die();
    }

    
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') :
        http_response_code(405);
        echo json_encode([
            'success' => 0,
            'message' => 'Bad Request!.Only POST method is allowed',
        ]);
        exit;
    endif;
    
    require 'db_connect.php';
    $database = new Operations();
    $conn = $database->dbConnection();
    
    $data = json_decode(file_get_contents("php://input"));


    //print_r($data);

    $services = $data->serviceOpt;
    //print_r($hobbies);
    $service_selected = '';
    foreach ($services as $service_rendered) {
        $service_selected .= $service_rendered.',';
     } 

    // if (!isset($data->first_name) || !isset($data->last_name) || !isset($data->email)) :
    
    //     echo json_encode([
    //         'success' => 0,
    //         'message' => 'Please enter compulsory fileds |  First Name, Last Name and Email',
    //     ]);
    //     exit;
    
    // elseif (empty(trim($data->first_name)) || empty(trim($data->last_name)) || empty(trim($data->email))) :
    
    //     echo json_encode([
    //         'success' => 0,
    //         'message' => 'Field cannot be empty. Please fill all the fields.',
    //     ]);
    //     exit;
    
    // endif;
    
    try {
    
        $date_entry = $data->date_entry;
        $facilitator = htmlspecialchars(trim($data->facilitator));
        $title = htmlspecialchars(trim($data->title));
        $type_beneficiary = htmlspecialchars(trim($data->type_beneficiary));
        $count_male = $data->count_male;
        $count_female = $data->count_female;
        $poor_rate = htmlspecialchars(trim($data->poor_rate));
        $fair_rate = htmlspecialchars(trim($data->fair_rate));
        $satisfactory_rate = htmlspecialchars(trim($data->satisfactory_rate));
        $verysatisfactory_rate = htmlspecialchars(trim($data->verysatisfactory_rate));
        $excellent_rate = htmlspecialchars(trim($data->excellent_rate));
        $duration = htmlspecialchars(trim($data->duration));
        $serviceOpt = $service_selected;
        $partners = htmlspecialchars(trim($data->partners));
        $fac_staff = htmlspecialchars(trim($data->fac_staff));
        $role = htmlspecialchars(trim($data->role));
        $cost_fund = htmlspecialchars(trim($data->cost_fund));
    
        $query = "INSERT INTO `monthlyreport_tbl`(
        date_entry,
        facilitator,
        title,
        type_beneficiary,
        count_male,
        count_female,
        poor_rate,
        fair_rate,
        satisfactory_rate,
        verysatisfactory_rate,
        excellent_rate,
        duration,
        serviceOpt,
        partners,
        fac_staff,
        role,
        cost_fund
        ) 
        VALUES(
        :date_entry,
        :facilitator,
        :title,
        :type_beneficiary,
        :count_male,
        :count_female,
        :poor_rate,
        :fair_rate,
        :satisfactory_rate,
        :verysatisfactory_rate,
        :excellent_rate,
        :duration,
        :serviceOpt,
        :partners,
        :fac_staff,
        :role,
        :cost_fund
        )";
    
        $stmt = $conn->prepare($query);
    
        $stmt->bindValue(':date_entry', $date_entry, PDO::PARAM_STR);
        $stmt->bindValue(':facilitator', $facilitator, PDO::PARAM_STR);
        $stmt->bindValue(':title', $title, PDO::PARAM_STR);
        $stmt->bindValue(':type_beneficiary', $type_beneficiary, PDO::PARAM_STR);
        $stmt->bindValue(':count_male', $count_male, PDO::PARAM_STR);
        $stmt->bindValue(':count_female', $count_female, PDO::PARAM_STR);
        $stmt->bindValue(':poor_rate', $poor_rate, PDO::PARAM_STR);
        $stmt->bindValue(':fair_rate', $fair_rate, PDO::PARAM_STR);
        $stmt->bindValue(':satisfactory_rate', $satisfactory_rate, PDO::PARAM_STR);
        $stmt->bindValue(':verysatisfactory_rate', $verysatisfactory_rate, PDO::PARAM_STR);
        $stmt->bindValue(':excellent_rate', $excellent_rate, PDO::PARAM_STR);
        $stmt->bindValue(':duration', $duration, PDO::PARAM_STR);
        $stmt->bindValue(':serviceOpt', $serviceOpt, PDO::PARAM_STR);
        $stmt->bindValue(':partners', $partners, PDO::PARAM_STR);
        $stmt->bindValue(':fac_staff', $fac_staff, PDO::PARAM_STR);
        $stmt->bindValue(':role', $role, PDO::PARAM_STR);
        $stmt->bindValue(':cost_fund', $cost_fund, PDO::PARAM_STR);

        

        if ($stmt->execute()) {
    
            http_response_code(201);
            echo json_encode([
                'success' => 1,
                'message' => 'Data Inserted Successfully.'
            ]);
            exit;
        }
        
        echo json_encode([
            'success' => 0,
            'message' => 'There is some problem in data inserting'
        ]);
        exit;
    
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'success' => 0,
            'message' => $e->getMessage()
        ]);
        exit;
    }

?>
