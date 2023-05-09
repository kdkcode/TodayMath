const { sendEmail } = require("./sendEmail");

sendEmail({
  to: "sujin924@kakao.com",
  subject: "Test Email",
  text: "This is a test email.",
});
