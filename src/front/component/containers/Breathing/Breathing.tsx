import React from "react";
import { ChildSystem } from "../../../../core/front-core/inter-field/AbstractSystem/ChildSystem/ChildSystem";

import { ReactComponent as Bg } from "../_Base/svg/bg.svg";

import { ReactComponent as Lungs } from "./svg/lungs.svg";
import './Breathing.scss'


export class Breathing extends React.Component {

  switchBodyColor() {
    if (window.location.pathname === "/breathing")
      document.body.className = "background_body";
  }

  pathElements = [
    {
      id: 1,
      content: Lungs,
    },
  ];

  cards = [
    {
      id: 1,
      title: "Легкие",
      description: "это главный орган дыхания. Воздух поступает в них по длинным трубкам - трахея и бронхам. Когда мы делаем вдох легкие наполняются воздухом, а когда выдох - воздух выходит из легких и они уменьшаются.",
      src: "lungs",
      doShow: false,
    },
  ];

  render() {
    this.switchBodyColor();
    return (
      <>
        <div className="content breathing_content">
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
