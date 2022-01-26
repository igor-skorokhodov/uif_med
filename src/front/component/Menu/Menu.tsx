import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../../core/front-core/inter-field/Breadcrumbs/withRouter";
import { ILocationProps } from "../../assets/interface_library";
import { humanSystems } from "../../assets/shared/projectData";
import "./Menu.css";


class MenuComponent extends React.Component<ILocationProps> {
  render() {
    const { pathname } = this.props.location

    return (
      <div className="menu">
        {humanSystems.slice(0, 7).map((system) => {
          return (
            <>
              <Link to={system.path}>
                <div className="menu_container">
                  <div
                    className={`switch-btn switch-btn-${system.class} ${system.class} ${pathname === system.path
                        ? "switch-on"
                        : "switch-off"
                      }`}
                  ></div>
                  <p className="menu_text">{system.name}</p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    );
  }
}

export const Menu = withRouter(MenuComponent);
