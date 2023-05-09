import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet} from "react-helmet";
import "./Plan.css";

function Plan() {
  return (
    <div>
    
    <div>
      <Helmet>
        <title>2023 | 수업시간표</title>
      </Helmet>
      <img src = "/img/plan.png" alt="plan"></img>
      
    </div>
  
    </div>
  );
}
export default Plan;
