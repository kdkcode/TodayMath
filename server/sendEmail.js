const nodemailer = require("nodemailer");

async function sendEmail({ to, subject, text }) {
  try {
    // nodemailer transporter 객체 생성
    let transporter = nodemailer.createTransport({
      host: "smtp.kakao.com",
      port: 465,
      secure: true,
      auth: {
        user: "sujin924@kakao.com", // 발신자 이메일 주소
        pass: process.env.EMAIL_PASSWORD, // 발신자 이메일 비밀번호
      },
    });
    

    // 메일 옵션 설정
    let mailOptions = {
      from: "sujin924@kakao.com", // 발신자 이메일 주소
      to, // 수신자 이메일 주소
      subject, // 메일 제목
      text, // 메일 내용
    };

    // 메일 전송
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { sendEmail };
