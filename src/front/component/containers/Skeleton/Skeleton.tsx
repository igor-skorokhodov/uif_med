import React from "react";
import './Sceleton.scss'
import { ChildSystem } from "../../../../core/front-core/inter-field/AbstractSystem/ChildSystem/ChildSystem";

import { ReactComponent as Bg } from "../_Base/svg/bg.svg";
import { ReactComponent as Scull } from "./svg/scull.svg";
import { ReactComponent as ChestSpine } from "./svg/chestSpine.svg";
import { ReactComponent as Neck } from "./svg/neck.svg";
import { ReactComponent as Pelvic } from "./svg/pelvic.svg";
import { ReactComponent as LeftHand } from "./svg/leftHand.svg";
import { ReactComponent as RightHand } from "./svg/rightHand.svg";
import { ReactComponent as LeftLeg } from "./svg/leftLeg.svg";
import { ReactComponent as RightLeg } from "./svg/rightLeg.svg";

import ScullImg from "./svg_src/scull.svg"
import ChestSpineImg from "./svg_src/chestSpine.svg"

export class Skeleton extends React.Component {
  switchBodyColor() {
    if (window.location.pathname === "/skeleton")
      document.body.className = "background_body";
  }
  pathElements = [
    {
      id: 1,
      content: Scull,
    },
    {
      id: 2,
      content: ChestSpine,
    },
    {
      id: 3,
      content: Neck,
    },
    {
      id: 4,
      content: Pelvic,
    },
    {
      id: 5,
      content: LeftHand,
    },
    {
      id: 6,
      content: RightHand,
    },
    {
      id: 7,
      content: LeftLeg,
    },
    {
      id: 8,
      content: RightLeg,
    },
  ];

  cards = [
    {
      id: 1,
      title: "Череп",
      description: "это кости головы, они крепко соеденины между собой, поэтому череп очень крепкий",
      src: ScullImg,
      doShow: false,
    },
    {
      id: 2,
      title: "Позвоночник",
      description: "стержень всего организма. Он состоит из маленьких косточек - позвонков. Между собой позвонки соединяются, как бусинки, с помощью суставов и связок.",
      src: ChestSpineImg,
      doShow: false,
    },
    {
      id: 4,
      title: "Таз",
      description: "расположенная в основании позвоночника часть скелета человека",
      src: "Pelvic",
      doShow: false,
    },
  ];

  render() {
    this.switchBodyColor();
    return (
      <>
        <div className="content skeleton_content">
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
