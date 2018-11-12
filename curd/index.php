<?php
header("Access-Control-Allow-Origin: *");
session_start();
$httpHeaders = new \stdClass();
foreach (getallheaders() as $name => $value) {
    $httpHeaders->$name = $value; 
}

$myObj = [];
$postData = json_decode(file_get_contents("php://input"));

for ($i = 0; $i < count($postData); $i++) {
    $action = array_values($postData)[$i]->action;
    $table_data = array_values($postData)[$i]->table;
    
    if ($action == 'loginUser') {
        $data = new \stdClass();
        $dbValues = new \stdClass();
        $sql = "SELECT * FROM $table_data->name WHERE user_username='$table_data->userName'";
        $result = connection($sql);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            foreach ($row as $key => $value) {
                $dbValues->$key = $value;
            }
        }
        $isPasswordCorrect = password_verify($table_data->password, $dbValues->user_password);
        if ($isPasswordCorrect) {
            $_SESSION["token"] = base64_encode(generateRandomString(32));
            $_SESSION['start'] = time();
            $_SESSION['expire'] = $_SESSION['start'] + (30 * 60);
            $data->data = 'Sucess';
            $data->userName = $table_data->userName;
            $data->token = $_SESSION["token"];
        } else {
            json_error('Falilure', 'Incorrect Password');
        }
    } else {
        json_error('Falilure', 'Incorrect UserName');
    }
        $myObj = $data;
    } else {
        $now = time();
        if ($httpHeaders->Token == $_SESSION["token"] && $now < $_SESSION['expire']) {
            array_push($myObj,executeLoop($table_data,$action));
        } else {
            json_error('Falilure', 'Session Expired, Please Login');
        }
    }
} 

function json_error($msg,$reason) {
    header('HTTP/1.1 500 ' . $msg);
    die(json_encode(array('error' => $msg, 'reason' => $reason)));
}

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}


function executeLoop($table_data,$action) { 
    $myLoopObj = new \stdClass();
    switch ($action) {
    case insert:
        insert($table_data); 
        break;
    case delete:
        delete($table_data);
        break;
    case selectSum:
        $sum = selectSum($table_data);
        break;
    default:
        break;
        
    }
    $myLoopObj = select($table_data,$action);
    $myLoopObj->sum = $sum;
    
    return $myLoopObj;
}

function connection($sql) {
    
    $servername = "localhost";
    $username = "anvikcli_vek";
    $password = "vek123";
    $dbname = "anvikcli_curd";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    return $conn->query($sql);
    $conn->close();
}
    

function select($table_data,$action) {
    $data = new \stdClass();
    if ($action != 'selectSum') {
    $var = connection("SELECT COUNT(*) FROM $table_data->name")->fetch_assoc();
    $count = array_values($var)[0];

    $sql = "SELECT * FROM $table_data->name ORDER BY $table_data->column_name DESC LIMIT $table_data->limit OFFSET $table_data->offset";
    $result = connection($sql);
    $records = array();
    if ($result->num_rows > 0) { 
        while($row = $result->fetch_assoc()) {
            array_push($records,$row);
        }
    }
    $data->data = $records;
    $data->count = $count;
    return $data;
    } else {
        return $data;
    }
}

function selectSum($table_data) {
    $sql = "SELECT SUM($table_data->column_name) FROM $table_data->name";
    $result = connection($sql);
    return array_values($result->fetch_assoc())[0];
}

function insert($table_data) {
    
    $sql = "INSERT INTO $table_data->name VALUES ($table_data->values)";
    $result = connection($sql);
}

function delete($table_data) {

    $sql = "DELETE FROM $table_data->name WHERE $table_data->column_name = $table_data->value";
    $data = connection($sql);
}

$myJSON = json_encode($myObj);
// echo base64_encode($myJSON);
echo $myJSON;

?>