import React from "react";
import { ChildSystem } from "../../../../core/front-core/inter-field/AbstractSystem/ChildSystem/ChildSystem";

import { ReactComponent as Bg } from "../_Base/svg/bg.svg";

import { ReactComponent as Face } from "./svg/face.svg";
import { ReactComponent as Pectoralis } from "./svg/pectoralis.svg";
import { ReactComponent as Ligamentums } from "./svg/ligamentums.svg";
import { ReactComponent as Abdominal } from "./svg/abdominal.svg";
import { ReactComponent as Platysma } from "./svg/platysma.svg";
import { ReactComponent as Shoulders } from "./svg/shoulders.svg";
import { ReactComponent as Forearm } from "./svg/forearm.svg";
import { ReactComponent as Hands } from "./svg/hands.svg";
import { ReactComponent as Hips } from "./svg/hips.svg";
import { ReactComponent as Shins } from "./svg/shins.svg";
import { ReactComponent as Feet } from "./svg/feet.svg";
import "./Muscles.scss"


export class Muscles extends React.Component{

  switchBodyColor() {
    if (window.location.pathname === "/muscles")
      document.body.className = "background_body";
  }

  pathElements = [
    {
      id: 1,
      content: Face,
    },
    {
      id: 2,
      content: Ligamentums,
    },
    {
      id: 3,
      content: Pectoralis,
    },
    {
      id: 4,
      content: Abdominal,
    },
    {
      id: 5,
      content: Platysma,
    },
    {
      id: 6,
      content: Shoulders,
    },
    {
      id: 7,
      content: Forearm,
    },
    {
      id: 8,
      content: Hands,
    },
    {
      id: 9,
      content: Hips,
    },
    {
      id: 10,
      content: Shins,
    },
    {
      id: 11,
      content: Feet,
    },
  ];

  cards = [];

  render() {
    this.switchBodyColor();
    return (
      <>
        <div className="content muscles_content">
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
