import React from "react";
import Reply from "./Reply";

export default function Comment() {
  return (
    <div>
       
      <div className="d-flex gap-2 my-2">

         <img
          src="/profileImages/lisa.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />

        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#EEEEEE" }}
        >
          <span className="fw-semibold" style={{ color: "#0F0F0F" }}>
            lalisa
          </span>
          <br />

          <span style={{ color: "#0F0F0F" }}>
            จริงค่า
          </span>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>999 คน</span>
          </div>

        </div>

      </div>

      

      <Reply />

      <div className="d-flex gap-2 my-2">

        <img
          src="/profileImages/charliebrown.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#EEEEEE" }}
        >
          <span className="fw-semibold" style={{ color: "#0F0F0F" }}>
            Charlie Brown
          </span><br />

          <span style={{ color: "#0F0F0F" }}>
            บ้าไปแล้ว
          </span>
          
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>

            <span style={{ color: "#B0B3B8" }}>
              207 คน
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}
