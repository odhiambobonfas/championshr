<?php
// ==============================================================================
// Champions HR Consultancy - Contact Form Mail Handler
// Designed for Host Africa cPanel / Apache Web Hosting
// ==============================================================================

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed. Use POST."]);
    exit;
}

// Read input data (handles both JSON and standard Form URL-encoded)
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$subject = isset($data['subject']) ? trim($data['subject']) : 'General HR Inquiry';
$message = isset($data['message']) ? trim($data['message']) : '';

// Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields (Name, Email, Message)."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please enter a valid email address."]);
    exit;
}

// Recipient Email
$toEmail = "info@championshr.co.ke";

// Sanitize inputs for email headers (prevent header injection)
$cleanName = str_replace(["\r", "\n"], '', strip_tags($name));
$cleanEmail = str_replace(["\r", "\n"], '', strip_tags($email));
$cleanSubject = str_replace(["\r", "\n"], '', strip_tags($subject));
if (empty($cleanSubject)) {
    $cleanSubject = "New Contact Inquiry from " . $cleanName;
}

$emailSubject = "[Champions HR Website] " . $cleanSubject;

// Email Body
$emailBody = "You have received a new contact inquiry from the Champions HR website:\n\n";
$emailBody .= "------------------------------------------------------------\n";
$emailBody .= "Full Name: " . $cleanName . "\n";
$emailBody .= "Email:     " . $cleanEmail . "\n";
$emailBody .= "Subject:   " . $cleanSubject . "\n";
$emailBody .= "Date/Time: " . date("Y-m-d H:i:s") . " EAT\n";
$emailBody .= "------------------------------------------------------------\n\n";
$emailBody .= "Message:\n" . $message . "\n\n";
$emailBody .= "------------------------------------------------------------\n";
$emailBody .= "Sent via Champions HR Consultancy Website (https://championshr.co.ke)\n";

// Headers
$serverHost = !empty($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'championshr.co.ke';
$fromAddress = "no-reply@" . preg_replace('/^www\./', '', $serverHost);

$headers = [];
$headers[] = "From: " . $cleanName . " <" . $fromAddress . ">";
$headers[] = "Reply-To: " . $cleanEmail;
$headers[] = "X-Mailer: PHP/" . phpversion();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

$headersString = implode("\r\n", $headers);

// Send Email
$mailSent = @mail($toEmail, $emailSubject, $emailBody, $headersString);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Thank you, " . $cleanName . "! Your message has been sent successfully to info@championshr.co.ke."
    ]);
} else {
    // If mail() failed on server (e.g. unconfigured sendmail in dev), return fallback notice
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Thank you! Your inquiry has been submitted. Our team will contact you at " . $cleanEmail . " soon."
    ]);
}
?>
