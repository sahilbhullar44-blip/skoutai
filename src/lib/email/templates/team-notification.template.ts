export interface ContactEmailData {
  name: string;
  email: string;
  company: string;
  size: string;
  message: string;
}

export function teamNotificationTemplate(data: ContactEmailData): string {
  const { name, email, company, size, message } = data;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact — Skout AI</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:32px 40px;">
            
              <h1 style="margin:20px 0 0;color:#ffffff;font-size:22px;font-weight:600;letter-spacing:-0.3px;">
                New Contact Form Submission
              </h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:14px;">
                Someone just reached out via skoutai.io
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- DETAILS TABLE -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;color:#71717a;font-size:13px;font-weight:500;width:130px;border-bottom:1px solid #e4e4e7;">Name</td>
                  <td style="padding:14px 20px;color:#18181b;font-size:14px;font-weight:600;border-bottom:1px solid #e4e4e7;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;color:#71717a;font-size:13px;font-weight:500;border-bottom:1px solid #e4e4e7;">Email</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #e4e4e7;">
                    <a href="mailto:${email}" style="color:#6366f1;font-size:14px;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;color:#71717a;font-size:13px;font-weight:500;border-bottom:1px solid #e4e4e7;">Company</td>
                  <td style="padding:14px 20px;color:#18181b;font-size:14px;border-bottom:1px solid #e4e4e7;">${company}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;color:#71717a;font-size:13px;font-weight:500;">Team Size</td>
                  <td style="padding:14px 20px;color:#18181b;font-size:14px;">${size}</td>
                </tr>
              </table>

              <!-- MESSAGE -->
              <div style="margin-top:24px;">
                <p style="margin:0 0 10px;color:#71717a;font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
                <div style="background:#fafafa;border:1px solid #e4e4e7;border-radius:12px;padding:20px;">
                  <p style="margin:0;color:#3f3f46;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- CTA -->
              <div style="margin-top:28px;text-align:center;">
                <a href="mailto:${email}?subject=Re: Your message to Skout AI"
                   style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:100px;text-decoration:none;">
                  Reply to ${name}
                </a>
              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#fafafa;border-top:1px solid #e4e4e7;padding:20px 40px;text-align:center;">
              <p style="margin:0;color:#a1a1aa;font-size:12px;">
                This notification was sent from the contact form at
                <a href="${appUrl}" style="color:#6366f1;text-decoration:none;">skoutai.io</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
