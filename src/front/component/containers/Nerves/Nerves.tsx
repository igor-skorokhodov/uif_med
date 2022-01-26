import React from "react";
import { ChildSystem } from "../../../../core/front-core/inter-field/AbstractSystem/ChildSystem/ChildSystem";

import { ReactComponent as Bg } from "../_Base/svg/bg.svg";

import { ReactComponent as Brain } from "./svg/brain.svg";
import { ReactComponent as SpinalCord } from "./svg/spinalCord.svg";
import "./Nerves.scss"


export class Nerves extends React.Component{

  switchBodyColor() {
    if (window.location.pathname === "/nerves")
      document.body.className = "background_body";
  }

  pathElements = [
    {
      id: 1,
      content: Brain,
    },
    {
      id: 2,
      content: SpinalCord,
    },
  ];

  cards = [];

  render() {
    this.switchBodyColor();
    return (
      <>
        <div className="content nerves_content">
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
