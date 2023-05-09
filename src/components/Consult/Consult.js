import { useState } from "react";
import "./Consult.css";

function Consult() {
const [studentName, setStudentName] = useState("");
const [parentName, setParentName] = useState("");
const [school, setSchool] = useState("");
const [grade, setGrade] = useState("");
const [studentPhone, setStudentPhone] = useState("");
const [parentPhone, setParentPhone] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Student Name: ", studentName);
    console.log("Parent Name: ", parentName);
    console.log("School: ", school);
    console.log("Grade: ", grade);
    console.log("Student Phone: ", studentPhone);
    console.log("Parent Phone: ", parentPhone);
    console.log("Message: ", message);
  
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        studentName,
        parentName,
        school,
        grade,
        studentPhone,
        parentPhone,
        message
      })
    })
    .then(response => {
      if (response.ok) {
        console.log('Email sent successfully');
        alert('상담문의가 접수되었습니다. 감사합니다!');
      } else {
        console.log('Error sending email');
        alert('상담문의 접수에 실패했습니다. 나중에 다시 시도해주세요.');
      }
    })
    .catch(error => {
      console.log(error);
      alert('상담문의 접수에 실패했습니다. 나중에 다시 시도해주세요.');
    });
  };
  

return (
<div className="contact-form-container">
<h2>상담문의</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="student-name">학생명</label>
<input
type="text"
id="student-name"
name="studentName"
value={studentName}
onChange={(event) => setStudentName(event.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="parent-name">학부모명</label>
<input
type="text"
id="parent-name"
name="parentName"
value={parentName}
onChange={(event) => setParentName(event.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="school">학교</label>
<input
type="text"
id="school"
name="school"
value={school}
onChange={(event) => setSchool(event.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="grade">학년</label>
<input
type="text"
id="grade"
name="grade"
value={grade}
onChange={(event) => setGrade(event.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="student-phone">학생 휴대폰 번호</label>
<input
type="tel"
id="student-phone"
name="studentPhone"
value={studentPhone}
onChange={(event) => setStudentPhone(event.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="parent-phone">학부모 휴대폰 번호</label>
<input
type="tel"
id="parent-phone"
name="parentPhone"
value={parentPhone}
onChange={(event) => setParentPhone(event.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="message">상담내용</label>
<textarea
id="message"
name="message"
value={message}
onChange={(event) => setMessage(event.target.value)}
required
/>
</div>
<button type="submit">상담예약하기</button>
</form>
<br></br>
    </div>
  );
}

export default Consult;