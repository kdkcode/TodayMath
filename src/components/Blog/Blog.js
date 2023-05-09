import { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  return (
    <div>
      <h1 className="title">에반이즈 x 오늘수학 </h1>
  
      <div className="content">
        <p>학원 소식과 각종 입시정보들을</p>
        <p>공식 블로그에서 한번에 만나보세요</p>
        <hr></hr>
     
        <a class="btn" href="https://blog.naver.com/hesed11/223083522381" target="_blank" rel="noopener noreferrer">에반이즈 블로그</a><br></br><br></br>
        <a class="btn" href="https://m.blog.naver.com/sujin_math/223033575373?referrerCode=1" target="_blank" rel="noopener noreferrer">오늘수학 블로그</a>
        <div className="parent">
          <a href="https://blog.naver.com/hesed11/223083522381" target="_blank" rel="noopener noreferrer"><img id="consult-img" src="/img/consult.png" alt="consult"></img></a>
          
        </div>

        <div class='consult'>
      
        <br></br>
          <strong>상담문의</strong><br></br>
          서울 양천구 신목로7길 9 2층<br></br><br></br>
          <strong>초등부 02-6083-4266 중,고등부 010-2418-3881</strong>
          <br></br>
        </div>
        <br></br><br></br>
      </div>
    </div>
  );
}
export default Blog;
