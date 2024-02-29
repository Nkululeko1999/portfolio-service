export const messageConfirmTemplate = (userName) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Confirmation: Nkuli App Dev</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Message Confirmation</h2>
        <p>Dear ${userName},</p>
        <p>We have received your request. Our team is currently reviewing your request and will attend to it as soon as possible. Please expect a response within the next 24 hours.</p>
        <p>If you have any urgent inquiries, feel free to contact us directly.</p>
        <p>Thank you for choosing our services.</p>
        <br>
        <p>Best Regards,</p>
        <p>Nkuli App Dev</p>
    </div>
</body>
</html>
`;

export const messageSentTemplate = (name, email, message, phone) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Client Message</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Quote Request</h2>
        <p>Hello,</p>
        <p>A new message request has been submitted by the following user:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li> <br />
            <li><strong>Message</strong> ${message}</li>
            <li><strong>Message</strong> ${phone}</li>
        </ul>
        <p>Please review the request and respond accordingly.</p>
        <br>
        <p>Best Regards,</p>
        <p>Nkuli App Dev</p>
    </div>
</body>
</html>
`;
