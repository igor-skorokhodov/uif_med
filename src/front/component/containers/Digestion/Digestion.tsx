import React from "react";
import { ChildSystem } from "../../../../core/front-core/inter-field/AbstractSystem/ChildSystem/ChildSystem";

import { ReactComponent as Bg } from "../_Base/svg/bg.svg";

import { ReactComponent as Liver } from "./svg/liver.svg";
import { ReactComponent as SmallIntestine } from "./svg/smallIntestine.svg";
import { ReactComponent as LargeIntestine } from "./svg/largeIntestine.svg";
import { ReactComponent as Lungs } from "./svg/lungs.svg";
import { ReactComponent as Stomach } from "./svg/stomach.svg";
import { ReactComponent as Heart } from "./svg/heart.svg";
import "./Digestion.scss"


export class Digestion extends React.Component{

  switchBodyColor() {
    if (window.location.pathname === "/digestion")
      document.body.className = "background_body";
  }

  pathElements = [
    {
      id: 1,
      content: Stomach,
    },
    {
      id: 2,
      content: SmallIntestine,
    },
    {
      id: 3,
      content: LargeIntestine,
    },
    {
      id: 4,
      content: Lungs,
    },
    {
      id: 5,
      content: Liver,
    },
    {
      id: 6,
      content: Heart,
    },
  ];

  cards = [
    {
      id: 5,
      title: "Печень",
      description: "очень важный орган. Она выводит из организма вредные вещества, которые попадают в нее с пище. А еще в печени образуется желчь, благодаря этой жидкости организм лучше усваивает еду.",
      src: "liver",
      doShow: false,
    },
    {
      id: 1,
      title: "Желудок",
      description: "Как только еда оказывается у нас во рту, она отправляется в долгое путеществие по организму. Сначала зубы измельчают пищу, а потом через пищевод она попадает в желудок. Наш желудок похож на большую кастрюлю. В нем вся съединая пища смещивается с желудочным соком и получается полужидкая кашеца.",
      src: "stomach",
      doShow: false,
    },
    {
      id: 2,
      title: "Кишечник",
      description: "Из желудка пища попадает в кишечник. Он всасывает все полезное, что ему необходимо.",
      src: "intestines",
      doShow: false,
    },
  ];

  render() {
    this.switchBodyColor();
    return (
      <>
        <div className="content digestion_content">
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
