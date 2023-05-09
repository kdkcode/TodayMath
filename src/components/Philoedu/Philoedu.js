import React from 'react';
import "./Philoedu.css";
import {Helmet} from 'react-helmet';

function Philoedu() {


  return (
<div className="content">
    <Helmet>
      <title>교육철학</title>
    </Helmet>

     <br></br>
     <h1 id="edu-essay">교육 철학</h1>
     <br></br>

    <div className="essay">
   
      <h2>1. [오늘수학] X [에반이즈]</h2>
      
      <h4>유/초등 수학과학 교육전문가 김선영원장 x 중/고등 수학교육전문가 최수진원장</h4>
      <div>
      초/중등부 또는 고등부만을 지도하는 것이 아닌<br></br>
      초등부터 고등까지 지도하고 있습니다.<br></br>
      그 이유는 바로 이것입니다.<br></br>
      </div>

      <h2 id="study">공부에 때가 있다.</h2>

      <div>
      현재 입시를 준비하는 학생이라면 <br></br>
      누구나 한번쯤은 들어봤을 말입니다.<br></br>
      수년간 아이들을 지도하며 때가 있다는 말이 <br></br>
      너무나도 중요하다는 것을 몸소 느꼈습니다.<br></br><br></br>

      상위권 대학교로의 진학을 목표하는 학생들이라면 <br></br>
      <strong>[시기적절하게 학습하기]</strong> 가 반드시 필요합니다. <br></br><br></br>


      이를 위해 초등수학부터 중등수학을 거쳐 고등수학까지 <br></br>
      어떻게 연계가 되는지,<br></br>
      어떤 시기에 어떻게 학습해야 성공적인 입시를 할 수 있는지 수년간의 데이터를 활용하여<br></br>
      각 학생들의 학습로드맵을 제시합니다.<br></br><br></br>

      </div>
     
      <h2>2. 무리한 선행학습은 절대 시키지않습니다.</h2>
      <div>
      이전 글에도 언급한 부분이지만 학생들이 맞지도 않는 <br></br>
      무리한 선행을 하면서 겪는 부작용들을 많이 봐왔기 때문에 <br></br>
      절대 무리한 선행학습은 진행하지 않습니다.<br></br><br></br>

      현재 학습하고 있는 과정을 정확하게 학습하는 것을 목표로 합니다.<br></br><br></br>

      <h2 id="certain">정확한 길로 가는 것이 느려 보이지만 가장 빠른 방법입니다!</h2><br></br>
      <a class="btn" href="https://m.blog.naver.com/sujin_math/223033575373?referrerCode=1" target="_blank" rel="noopener noreferrer">오늘수학 블로그</a>

      <br></br><br></br>
      </div>
      <h2>3. 철저하게 학생중심으로 교육하겠습니다.</h2>
      <div>
      끊임없는 학생, 학부모님과의 소통을 통해 <br></br>
      개개인에 맞는 피드백을 제공합니다.<br></br><br></br>

      또한 학습에 대한 동기부여와 장기적인 목표설정을 제시하여 <br></br>
      우리 소중한 학생들이 지지치 않고 목표를 향해 나아갈 수 있도록 <br></br>
      교사로서 진심을 다하겠습니다.<br></br>

      </div>



    </div>

  <div className="imgs">
      <img src = "/img/owner0.png" alt="choi"></img>
      <img src = "/img/onwer02.png" alt="kim"></img>
  </div>

</div>
  );
}
export default Philoedu;