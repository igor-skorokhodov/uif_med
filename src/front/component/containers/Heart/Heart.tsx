import React from "react";
import { ChildSystem } from "../../../../core/front-core/inter-field/AbstractSystem/ChildSystem/ChildSystem";

import { ReactComponent as Bg } from "../_Base/svg/bg.svg";

import { ReactComponent as BlueLargeArtery } from "./svg/blueLargeArtery.svg";
import { ReactComponent as BlueSmallArtery } from "./svg/blueSmallArtery.svg";
import { ReactComponent as HeartInner } from "./svg/heart.svg";
import { ReactComponent as RedSmallArtery } from "./svg/redSmallArtery.svg";
import { ReactComponent as WholeLargeRedArtery } from "./svg/wholeLargeRedArtery.svg";
import "./Heart.scss"


export class Heart extends React.Component{

  switchBodyColor() {
    if (window.location.pathname === "/heart")
      document.body.className = "background_body";
  }

  pathElements = [
    {
      id: 1,
      content: BlueLargeArtery,
    },
    {
      id: 2,
      content: BlueSmallArtery,
    },
    {
      id: 3,
      content: WholeLargeRedArtery,
    },
    {
      id: 4,
      content: RedSmallArtery,
    },
    {
      id: 5,
      content: HeartInner,
    },
  ];

  cards = [
    {
      id: 5,
      title: "Сердце",
      description: "качает кровь по телу",
      src: "",
      doShow: false,
    },
  ];

  render() {
    this.switchBodyColor();
    return (
      <>
        <div className="content heart_content">
          <ChildSystem
            viewbox={"0 0 256.5 381"}
            cards={this.cards}
            pathElements={this.pathElements}
            mainImg={Bg}
          />
        </div>
      </>
    );
  }
}
