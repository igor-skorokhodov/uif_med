import React from "react";
import { Link } from "react-router-dom";
import { humanSystems } from "../../assets/shared/projectData";
import "./SystemElement.css";

interface ISystemElementProps {
  path: string;
}

interface ISystemElementState {
  skeleton: string;
  heart: string;
  digestion: string;
  nerves: string;
  muscles: string;
  breathing: string;
  switch: boolean;
  animation: string;
}

export class SystemElement extends React.Component<ISystemElementProps, ISystemElementState> {
  constructor(props: any) {
    super(props);

    // Начальные значения внутреннего состояния
    this.state = {
      skeleton: "",
      heart: "",
      digestion: "",
      nerves: "",
      muscles: "",
      breathing: "",
      switch: false,
      animation: "",
    };
  }

  render() {
    return (
      <div className="element_container">
        {humanSystems.slice(0, 7).map((system) => {
          return (
            <>
                <div className="menu_container">
                  <div
                   
                  ></div>
                  <p className="menu_text">{system.name}</p>
                </div>
            </>
          );
        })}
      </div>
    );
  }
}
