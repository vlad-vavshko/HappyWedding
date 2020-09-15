<?php
// Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $middle_name = $_POST['middle_name'];
    $date = $_POST['date'];

    // создаем переменную с содержанием письма
    $content = $name . ' ' . $last_name . ' оставил заявку на организацию свадьбы. Его телефон: ' . $phone . '. Его електронная почта:' . $email . 'Дата свадьбы: ' . $date; . '.'

    // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("test@mail.com", 'Запрос на Организацию свадьбы', $content);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}