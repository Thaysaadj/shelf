import Favorite from "../../icon/Favorite";
import { useState } from "react";

export default function Card({ src, description, oldprice, newprice, conditions }) {

  const [check, setCheck] = useState(false)


  return (
    <div className="sectionCard">
      <div className="imgCard">
        <Favorite />
        <img className="imageProduct" src={src} />
      </div>

      <div className="infoCard">
        <div className="descriptionCard">
          <p>{description}</p>
        </div>
        <div className="oldPtice">
          <p>{oldprice}</p>
        </div>
        <div className="newPrice">
          <p>{newprice}</p>
        </div>
        <div className="paymentConditions">
          <p> em até  <strong>{conditions}</strong> sem juros</p>
        </div>
      </div>
      <div className="buttonContainer">
        <button className={`buttonCard ${check ? "checked" : ""}` } onClick={() => setCheck(!check)}>
          <span>
          {check ? 
          <img src="../../images/check.png"/>
          : null} 
          </span>
          <span>{check ? "ADICIONADO" : "ADICIONAR"}</span>
        </button>
      </div>
    </div>
  )
}