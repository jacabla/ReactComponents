import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="display">
      <div className="footerMain">
        <div>
          <ul className="footer">
            <li>INICIO</li>
            <li>HOME</li>
            <li>GAlERIA</li>
            <li>CONTACO</li>
          </ul>
        </div>
        <div >
          <ul className="footer">
            <li>MAS</li>
            <li>ABOUT</li>
            <li>FORMS</li>
            <li>LEGAL</li>
          </ul>
        </div>
        <div>
          <ul className="footer">
            <li>FACEBUG</li>
            <li>TWITER</li>
            <li>INSTAGRAM</li>
            <li>WHATSAPP</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
