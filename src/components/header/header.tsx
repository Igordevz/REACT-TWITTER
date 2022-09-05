import React from "react";
import "./header.css";
import estrela from "../../img/svgexport-12.svg";
import  galery from "../../img/svgexport-14.svg";
import gif from "../../img/svgexport-15.svg";
import emoji from "../../img/svgexport-17.svg";
import location from "../../img/svgexport-19.svg";


export function TwitterHead() {
  return (
    <header>
      <h1>
        Página Inicial
        <img src={estrela} alt="" />
      </h1>
      <div className="home-header"></div>
      <form action="#" className="form-input">
        <input type="text" placeholder="O que está acontecendo?"/>
      </form>
      <div className="mini-logo">
        <img src={galery} alt=""  width={24}/>
        <img src={emoji} alt=""  width={24}/>
        <img src={gif} alt="" width={24}/> 
        <img src={location} alt="" width={24}/>
      </div>
     <div className="btn">
        <a href="#">Tweetar</a>
     </div>
    </header>

  );
}
export default TwitterHead();
