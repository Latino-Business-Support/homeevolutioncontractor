<!DOCTYPE html>
<html>

<head>
    <title>New message from the contact form</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body
    style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f7f7f7; color: #333333;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%"
        style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <!-- HEADER -->
        <tr>
            <td align="center" bgcolor="#000000" style="padding: 20px 0;">
                <h2 style="color: white; margin: 0; font-size: 20px;">{{ $info['name'] }}</h2>
            </td>
        </tr>

        <!-- TITLE BAR -->
        <tr>
            <td bgcolor="#D32F2F" style="padding: 15px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Received</h1>
            </td>
        </tr>

        <!-- CONTENT -->
        <tr>
            <td style="padding: 30px 20px;">
                <p style="font-size: 16px; line-height: 24px; margin-bottom: 25px;">A new message has been received
                    through the website contact form:</p>

                <!-- CONTACT INFO -->
                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                    style="margin-bottom: 30px; border-collapse: collapse;">
                    <tr>
                        <td width="120"
                            style="padding: 10px; background-color: #f5f5f5; font-weight: bold; border: 1px solid #eeeeee;">
                            Name:</td>
                        <td style="padding: 10px; border: 1px solid #eeeeee;">{{ $data['name'] }}</td>
                    </tr>
                    <tr>
                        <td width="120"
                            style="padding: 10px; background-color: #f5f5f5; font-weight: bold; border: 1px solid #eeeeee;">
                            Email:</td>
                        <td style="padding: 10px; border: 1px solid #eeeeee;">{{ $data['email'] }}</td>
                    </tr>
                    <tr>
                        <td width="120"
                            style="padding: 10px; background-color: #f5f5f5; font-weight: bold; border: 1px solid #eeeeee;">
                            Phone:</td>
                        <td style="padding: 10px; border: 1px solid #eeeeee;">{{ $data['phone'] }}</td>
                    </tr>
                    <tr>
                        <td width="120"
                            style="padding: 10px; background-color: #f5f5f5; font-weight: bold; border: 1px solid #eeeeee;">
                            Address:</td>
                        <td style="padding: 10px; border: 1px solid #eeeeee;">{{ $data['address'] }}</td>
                    </tr>
                </table>

                <!-- MESSAGE -->
                <div
                    style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #D32F2F; margin-bottom: 30px;">
                    <h3 style="margin-top: 0; color: #333333;">Message:</h3>
                    <p style="line-height: 24px; margin-bottom: 0;">{{ $data['message'] }}</p>
                </div>
            </td>
        </tr>

        <!-- FOOTER -->
        <tr>
            <td bgcolor="#333333" style="padding: 20px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td style="color: #ffffff; font-size: 14px; text-align: center; padding-bottom: 10px;">
                            <p style="margin: 0;">{{ $info['address'] }}</p>
                            <p style="margin: 5px 0;">{{ $info['phone'] }}</p>
                            <p style="margin: 5px 0;">{{ $info['email'] }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="color: #aaaaaa; font-size: 12px; text-align: center; padding-top: 10px; border-top: 1px solid #555555;">
                            <p style="margin: 0;">© {{ date('Y') }}
                                {{ $info['name'] }}. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
