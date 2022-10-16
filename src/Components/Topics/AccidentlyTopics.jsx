import React from "react";
import { accidenttopic } from "./topicsData";
import {Link} from "react-router-dom"
const AccidentlyTopics = () => {
  return (
    <div className="accidently-topics">
      <div className="title">
        <Link to="/topics" className="all">دیدن تمام مقالات</Link>
        <h5 className="latest">آخرین مقالات</h5>
      </div>
      <div className="row">
        {accidenttopic.map((acc) => {
          return (
            <div className="col-md-4 col-sm-12" key={acc.id}>
              <div className="single-topiccs">
                <div className="topics-img img-fluid">
                  <img src={acc.img} alt="" />
                </div>
                <div className="topics-title">
                  <p className="h1">{acc.title}</p>
                </div>
                <div className="detials">
                  <p>{acc.detial}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccidentlyTopics;
