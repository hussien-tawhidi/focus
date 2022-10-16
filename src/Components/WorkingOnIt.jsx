import React from "react";

const WorkingOnIt = ({text}) => {
  return (
    <div className="working center-elements">
      <img src="/Assets/working.jpg" alt="" className="working-img" />
      <p className="text">working on {text} ...</p>
    </div>
  );
};

export default WorkingOnIt;
