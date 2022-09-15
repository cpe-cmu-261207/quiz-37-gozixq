import React from "react";
import Comment from "./Comment";

export default function PostOwner() {
  return (
  <div>
    <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src="/profileImages/profile.PNG"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />

          <span className="fw-semibold fs-5 text-white">
            Natsinee Sasanasopa 640612087
          </span>
        </div>

      <span className="text-white"> 
        คณะที่ใช่ นรกที่เลือก 
      </span>
      
      <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>

          <span style={{ color: "#B0B3B8" }}>
            99999 คน
          </span>
      </div>

      <hr className="m-0 border" />

    </div>
    <Comment />
  </div>
 );
}
